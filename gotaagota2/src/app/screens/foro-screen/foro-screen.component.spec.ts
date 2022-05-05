import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoScreenComponent } from './foro-screen.component';

describe('ForoScreenComponent', () => {
  let component: ForoScreenComponent;
  let fixture: ComponentFixture<ForoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
