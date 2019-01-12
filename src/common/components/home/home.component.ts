import {Component, OnDestroy, OnInit} from '@angular/core';
import {ButterCMSService} from '../../services/butterCMS.service';
import {ActivatedRoute} from '@angular/router';
import {map, takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  content;
  $destroy = new Subject();
  constructor(
    private contentService: ButterCMSService,
    private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.pipe(
      takeUntil(this.$destroy),
      map(val => val.post)
    ).subscribe(val => {
      this.contentService.getSinglePage(val).then((res) => {
        this.content = res.data.data;
      }).catch((res) => {
        this.content = res;
      });
    });

  }
  ngOnDestroy() {
    this.$destroy.next();
  }
}
