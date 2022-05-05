import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaScreensComponent } from './planta-screens.component';

describe('PlantaScreensComponent', () => {
  let component: PlantaScreensComponent;
  let fixture: ComponentFixture<PlantaScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantaScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
