import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProofpaymentPageRoutingModule } from './proofpayment-routing.module';

import { ProofpaymentPage } from './proofpayment.page';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProofpaymentPageRoutingModule
  ],
  declarations: [ProofpaymentPage, NavbarComponent]
})
export class ProofpaymentPageModule {}
