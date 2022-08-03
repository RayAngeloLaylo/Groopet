import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgroomerPageRoutingModule } from './pgroomer-routing.module';

import { PgroomerPage } from './pgroomer.page';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgroomerPageRoutingModule
  ],
  declarations: [PgroomerPage, NavbarComponent]
})
export class PgroomerPageModule {}
