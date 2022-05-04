import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPlantaComponent } from './tarjeta-planta.component';

describe('TarjetaPlantaComponent', () => {
  let component: TarjetaPlantaComponent;
  let fixture: ComponentFixture<TarjetaPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
