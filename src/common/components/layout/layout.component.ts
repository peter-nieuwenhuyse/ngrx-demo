import {Component} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {
  opened = true;
  title = 'ANGULAR GEEK';
  toggleSideNav() {
    this.opened = !this.opened;
  }
}
