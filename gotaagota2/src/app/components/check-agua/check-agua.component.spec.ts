import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAguaComponent } from './check-agua.component';

describe('CheckAguaComponent', () => {
  let component: CheckAguaComponent;
  let fixture: ComponentFixture<CheckAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
