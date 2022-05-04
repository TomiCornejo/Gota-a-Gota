import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRiegoComponent } from './info-riego.component';

describe('InfoRiegoComponent', () => {
  let component: InfoRiegoComponent;
  let fixture: ComponentFixture<InfoRiegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRiegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoRiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
