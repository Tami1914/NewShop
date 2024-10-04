import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-coffees',
    loadChildren: () => import('./my-coffees/my-coffees.module').then( m => m.MyCoffeesPageModule)
  },
  {
    path: 'create-coffee-page',
    loadChildren: () => import('./create-coffee-page/create-coffee-page.module').then( m => m.CreateCoffeePagePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
