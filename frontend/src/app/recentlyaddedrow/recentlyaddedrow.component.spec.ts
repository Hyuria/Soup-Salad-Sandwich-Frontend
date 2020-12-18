import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyaddedrowComponent } from './recentlyaddedrow.component';

describe('RecentlyaddedrowComponent', () => {
  let component: RecentlyaddedrowComponent;
  let fixture: ComponentFixture<RecentlyaddedrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyaddedrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyaddedrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
