import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAllComponent } from './reset-all.component';

describe('ResetAllComponent', () => {
  let component: ResetAllComponent;
  let fixture: ComponentFixture<ResetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
