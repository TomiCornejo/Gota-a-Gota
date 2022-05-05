import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoScreenComponent } from './seguimiento-screen.component';

describe('SeguimientoScreenComponent', () => {
  let component: SeguimientoScreenComponent;
  let fixture: ComponentFixture<SeguimientoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
