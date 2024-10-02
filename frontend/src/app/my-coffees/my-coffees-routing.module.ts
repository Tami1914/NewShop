import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCoffeesPage } from './my-coffees.page';

const routes: Routes = [
  {
    path: '',
    component: MyCoffeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCoffeesPageRoutingModule {}
