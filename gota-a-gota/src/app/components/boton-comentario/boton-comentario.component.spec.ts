import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonComentarioComponent } from './boton-comentario.component';

describe('BotonComentarioComponent', () => {
  let component: BotonComentarioComponent;
  let fixture: ComponentFixture<BotonComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonComentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
