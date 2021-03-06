import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const routes = [
  { path: '',
    component: HomeComponent,
    data: {
      post: 'introduction'
    }}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule {}
