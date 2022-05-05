import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRiegoComponent } from './tabla-riego.component';

describe('TablaRiegoComponent', () => {
  let component: TablaRiegoComponent;
  let fixture: ComponentFixture<TablaRiegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRiegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
