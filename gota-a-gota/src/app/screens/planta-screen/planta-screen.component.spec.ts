import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaScreenComponent } from './planta-screen.component';

describe('PlantaScreenComponent', () => {
  let component: PlantaScreenComponent;
  let fixture: ComponentFixture<PlantaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
