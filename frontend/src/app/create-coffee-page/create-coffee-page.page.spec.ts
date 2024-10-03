import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCoffeePagePage } from './create-coffee-page.page';

describe('CreateCoffeePagePage', () => {
  let component: CreateCoffeePagePage;
  let fixture: ComponentFixture<CreateCoffeePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoffeePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
