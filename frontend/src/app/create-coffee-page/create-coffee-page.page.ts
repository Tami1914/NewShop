import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoffeeService } from '../services/coffee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-coffee-page',
  templateUrl: './create-coffee-page.page.html',
  styleUrls: ['./create-coffee-page.page.scss'],
})
export class CreateCoffeePagePage implements OnInit {

  coffeeForm: FormGroup;

  constructor(public formBuider: FormBuilder,
      private coffeeService: CoffeeService,
      private route: Router) {
        this.coffeeForm = this.formBuider.group({
          country: ['', Validators.compose([Validators.required])],
          flavor: ['', Validators.compose([Validators.required])]
        })
      }

  ngOnInit() {}

  createCoffee(){
    if(this.coffeeForm.valid){
      console.log('Formulario valido:', this.coffeeForm.value);
      this.coffeeService.create(this.coffeeForm.value).subscribe(response => {
        this.route.navigateByUrl("/my-coffees");
      })
    } else {
      console.log('Formulario no valido');
    }
  }

  getFormControl(field: string){
    return this.coffeeForm.get(field);
  }

}
