import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishpageComponent } from './dishpage.component';

describe('DishpageComponent', () => {
  let component: DishpageComponent;
  let fixture: ComponentFixture<DishpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
