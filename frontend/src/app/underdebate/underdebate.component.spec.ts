import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderdebateComponent } from './underdebate.component';

describe('UnderdebateComponent', () => {
  let component: UnderdebateComponent;
  let fixture: ComponentFixture<UnderdebateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderdebateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderdebateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
