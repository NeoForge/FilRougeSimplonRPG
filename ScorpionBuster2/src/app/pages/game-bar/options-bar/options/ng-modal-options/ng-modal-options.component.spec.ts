import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModalOptionsComponent } from './ng-modal-options.component';

describe('NgModalOptionsComponent', () => {
  let component: NgModalOptionsComponent;
  let fixture: ComponentFixture<NgModalOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModalOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
