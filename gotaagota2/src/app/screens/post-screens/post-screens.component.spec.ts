import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostScreensComponent } from './post-screens.component';

describe('PostScreensComponent', () => {
  let component: PostScreensComponent;
  let fixture: ComponentFixture<PostScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
