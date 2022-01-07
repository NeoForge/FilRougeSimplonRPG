import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModalShopComponent } from './ng-modal-shop.component';

describe('NgModalShopComponent', () => {
  let component: NgModalShopComponent;
  let fixture: ComponentFixture<NgModalShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModalShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
