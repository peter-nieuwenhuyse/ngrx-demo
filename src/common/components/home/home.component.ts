import {Component, OnInit} from '@angular/core';
import {ButterCMSService} from '../../services/butterCMS.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  content;
  constructor(private contentService: ButterCMSService) {}
  ngOnInit() {
    this.contentService.getAllPages();
    this.contentService.getSinglePage('managing-content-with-buttercms').then((res) => {
      this.content = res.data.data;
    }).catch((res) => {
      this.content = res;
    });
  }
}
