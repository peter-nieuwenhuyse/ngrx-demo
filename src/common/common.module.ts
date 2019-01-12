import {NgModule} from '@angular/core';
import {MatImportsModule} from './matImports.module';
import {LayoutComponent} from './components/layout/layout.component';
import {HomeComponent} from './components/home/home.component';
import {CommonRoutingModule} from './common-routing.module';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FooterComponent} from './components/footer/footer.component';

const components = [
  LayoutComponent,
  SidenavComponent,
  HomeComponent,
  FooterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    BrowserModule,
    MatImportsModule,
    CommonRoutingModule
    ],
  exports: [LayoutComponent]
})
export class CommonAppModule {}
