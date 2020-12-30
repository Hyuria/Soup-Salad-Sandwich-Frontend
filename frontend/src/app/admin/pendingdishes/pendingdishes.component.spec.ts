import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingdishesComponent } from './pendingdishes.component';

describe('PendingdishesComponent', () => {
  let component: PendingdishesComponent;
  let fixture: ComponentFixture<PendingdishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingdishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingdishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
