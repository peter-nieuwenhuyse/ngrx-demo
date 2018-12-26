import {NgModule} from '@angular/core';
import {MatImportsModule} from './matImports.module';
import {LayoutComponent} from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const components = [LayoutComponent, HomeComponent];
@NgModule({
  declarations: [...components],
  imports: [
    MatImportsModule,
    RouterModule.forRoot([
      {path: '' , component: HomeComponent}
    ])],
  exports: [LayoutComponent]
})

export class CommonAppModule {}
