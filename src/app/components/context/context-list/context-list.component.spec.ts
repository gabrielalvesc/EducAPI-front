import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextListComponent } from './context-list.component';

describe('ContextListComponent', () => {
  let component: ContextListComponent;
  let fixture: ComponentFixture<ContextListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
