import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCoffeesPage } from './my-coffees.page';

describe('MyCoffeesPage', () => {
  let component: MyCoffeesPage;
  let fixture: ComponentFixture<MyCoffeesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoffeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
