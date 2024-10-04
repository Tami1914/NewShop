import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-coffees',
  templateUrl: './my-coffees.page.html',
  styleUrls: ['./my-coffees.page.scss'],
})
export class MyCoffeesPage implements OnInit {

  coffees: any = [];

  constructor(private coffeeService: CoffeeService, private router: Router) { }

  ngOnInit() {
    this.getAllCoffees();
  }

  getAllCoffees() {
    this.coffeeService.getCoffees().subscribe(response => {
      this.coffees = response;
    });
  }

  deleteCoffee(id: any) {
    this.coffeeService.delete(id).subscribe(response => {
      this.getAllCoffees();
    })
  }

  gotoMyCreateCoffee(){
    this.router.navigateByUrl("/create-coffee-page");
  }

  goHome(){
    this.router.navigateByUrl("/home");
  }
}
