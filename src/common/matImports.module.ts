import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDrawer,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatTreeModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules]

})
export class MatImportsModule {}
