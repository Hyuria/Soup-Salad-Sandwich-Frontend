import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoupmenuComponent } from './soupmenu.component';

describe('SoupmenuComponent', () => {
  let component: SoupmenuComponent;
  let fixture: ComponentFixture<SoupmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoupmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
