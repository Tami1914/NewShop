import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  country: string = "España";
  flavor: string = "Vainilla";

  constructor(private router: Router) { }

  gotoMyCoffees() {
    this.router.navigateByUrl("/my-coffees");
  }
}
