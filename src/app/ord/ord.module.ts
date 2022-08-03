import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdPageRoutingModule } from './ord-routing.module';

import { OrdPage } from './ord.page';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdPageRoutingModule

  ],
  declarations: [OrdPage, NavbarComponent]
})
export class OrdPageModule {}
