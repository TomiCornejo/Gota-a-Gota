import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRiegoScreenComponent } from './info-riego-screen.component';

describe('InfoRiegoScreenComponent', () => {
  let component: InfoRiegoScreenComponent;
  let fixture: ComponentFixture<InfoRiegoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRiegoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRiegoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
