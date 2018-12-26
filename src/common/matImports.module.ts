import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatDrawer, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]

})
export class MatImportsModule {}
