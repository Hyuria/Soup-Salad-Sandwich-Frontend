import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HottopicsComponent } from './hottopics.component';

describe('HottopicsComponent', () => {
  let component: HottopicsComponent;
  let fixture: ComponentFixture<HottopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HottopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HottopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
