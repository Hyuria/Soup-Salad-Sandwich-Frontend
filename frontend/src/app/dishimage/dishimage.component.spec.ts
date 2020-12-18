import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishimageComponent } from './dishimage.component';

describe('DishimageComponent', () => {
  let component: DishimageComponent;
  let fixture: ComponentFixture<DishimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
