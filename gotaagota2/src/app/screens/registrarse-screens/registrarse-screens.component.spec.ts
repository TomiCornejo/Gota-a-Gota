import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarseScreensComponent } from './registrarse-screens.component';

describe('RegistrarseScreensComponent', () => {
  let component: RegistrarseScreensComponent;
  let fixture: ComponentFixture<RegistrarseScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarseScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarseScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
