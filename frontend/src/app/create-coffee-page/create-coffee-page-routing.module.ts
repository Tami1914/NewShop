import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCoffeePagePage } from './create-coffee-page.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCoffeePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCoffeePagePageRoutingModule {}
