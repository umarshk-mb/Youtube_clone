import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocontaierComponent } from './videocontaier.component';

describe('VideocontaierComponent', () => {
  let component: VideocontaierComponent;
  let fixture: ComponentFixture<VideocontaierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocontaierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocontaierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
