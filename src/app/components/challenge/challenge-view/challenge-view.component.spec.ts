import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeViewComponent } from './challenge-view.component';

describe('ChallengeViewComponent', () => {
  let component: ChallengeViewComponent;
  let fixture: ComponentFixture<ChallengeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
