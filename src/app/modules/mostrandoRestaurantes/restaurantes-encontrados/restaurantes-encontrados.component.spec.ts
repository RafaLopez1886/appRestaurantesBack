import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesEncontradosComponent } from './restaurantes-encontrados.component';

describe('RestaurantesEncontradosComponent', () => {
  let component: RestaurantesEncontradosComponent;
  let fixture: ComponentFixture<RestaurantesEncontradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantesEncontradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantesEncontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
