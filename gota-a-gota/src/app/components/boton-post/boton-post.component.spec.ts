import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPostComponent } from './boton-post.component';

describe('BotonPostComponent', () => {
  let component: BotonPostComponent;
  let fixture: ComponentFixture<BotonPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
