import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoScreensComponent } from './seguimiento-screens.component';

describe('SeguimientoScreensComponent', () => {
  let component: SeguimientoScreensComponent;
  let fixture: ComponentFixture<SeguimientoScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
