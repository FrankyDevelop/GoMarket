import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabReservasPageRoutingModule } from './tab-reservas-routing.module';

import { TabReservasPage } from './tab-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabReservasPageRoutingModule
  ],
  declarations: [TabReservasPage]
})
export class TabReservasPageModule {}
