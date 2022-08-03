import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProofpaymentPage } from './proofpayment.page';

const routes: Routes = [
  {
    path: '',
    component: ProofpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProofpaymentPageRoutingModule {}
