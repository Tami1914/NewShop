import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCoffeesPageRoutingModule } from './my-coffees-routing.module';

import { MyCoffeesPage } from './my-coffees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCoffeesPageRoutingModule
  ],
  declarations: [MyCoffeesPage]
})
export class MyCoffeesPageModule {}
