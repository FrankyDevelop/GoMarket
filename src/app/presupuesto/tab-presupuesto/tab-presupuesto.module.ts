import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPresupuestoPageRoutingModule } from './tab-presupuesto-routing.module';

import { TabPresupuestoPage } from './tab-presupuesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPresupuestoPageRoutingModule
  ],
  declarations: [TabPresupuestoPage]
})
export class TabPresupuestoPageModule {}
