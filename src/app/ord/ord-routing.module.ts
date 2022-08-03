import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdPage } from './ord.page';

const routes: Routes = [
  {
    path: '',
    component: OrdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdPageRoutingModule {}
