import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesCreadosComponent } from './restaurantes-creados.component';

describe('RestaurantesCreadosComponent', () => {
  let component: RestaurantesCreadosComponent;
  let fixture: ComponentFixture<RestaurantesCreadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantesCreadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantesCreadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
