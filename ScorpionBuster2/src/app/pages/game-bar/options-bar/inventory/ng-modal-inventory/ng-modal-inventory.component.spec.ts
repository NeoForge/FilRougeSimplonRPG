import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModalInventoryComponent } from './ng-modal-inventory.component';

describe('NgModalInventoryComponent', () => {
  let component: NgModalInventoryComponent;
  let fixture: ComponentFixture<NgModalInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModalInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModalInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
