import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPostComponent } from './titulo-post.component';

describe('TituloPostComponent', () => {
  let component: TituloPostComponent;
  let fixture: ComponentFixture<TituloPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
