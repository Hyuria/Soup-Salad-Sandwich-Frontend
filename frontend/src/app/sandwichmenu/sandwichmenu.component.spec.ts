import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichmenuComponent } from './sandwichmenu.component';

describe('SandwichmenuComponent', () => {
  let component: SandwichmenuComponent;
  let fixture: ComponentFixture<SandwichmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandwichmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
