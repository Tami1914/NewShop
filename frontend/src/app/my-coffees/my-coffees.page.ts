import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';

@Component({
  selector: 'app-my-coffees',
  templateUrl: './my-coffees.page.html',
  styleUrls: ['./my-coffees.page.scss'],
})
export class MyCoffeesPage implements OnInit {

  coffees: any = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getAllCoffees();
  }

  getAllCoffees(){
    this.coffeeService.getCoffees().subscribe(response => {
      this.coffees = response;
    });
  }
}
