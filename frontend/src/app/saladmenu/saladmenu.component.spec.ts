import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladmenuComponent } from './saladmenu.component';

describe('SaladmenuComponent', () => {
  let component: SaladmenuComponent;
  let fixture: ComponentFixture<SaladmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
