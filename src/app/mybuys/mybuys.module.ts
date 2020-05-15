import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MybuysPageRoutingModule } from './mybuys-routing.module';

import { MybuysPage } from './mybuys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MybuysPageRoutingModule
  ],
  declarations: [MybuysPage]
})
export class MybuysPageModule {}
