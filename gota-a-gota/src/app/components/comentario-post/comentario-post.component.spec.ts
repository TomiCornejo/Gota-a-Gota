import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioPostComponent } from './comentario-post.component';

describe('ComentarioPostComponent', () => {
  let component: ComentarioPostComponent;
  let fixture: ComponentFixture<ComentarioPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
