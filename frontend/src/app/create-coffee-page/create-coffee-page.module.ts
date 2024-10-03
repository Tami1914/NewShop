import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCoffeePagePageRoutingModule } from './create-coffee-page-routing.module';

import { CreateCoffeePagePage } from './create-coffee-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCoffeePagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateCoffeePagePage]
})
export class CreateCoffeePagePageModule {}
