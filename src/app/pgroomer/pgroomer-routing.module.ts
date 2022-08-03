import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgroomerPage } from './pgroomer.page';

const routes: Routes = [
  {
    path: '',
    component: PgroomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgroomerPageRoutingModule {}
