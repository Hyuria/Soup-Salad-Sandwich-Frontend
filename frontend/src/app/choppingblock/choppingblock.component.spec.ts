import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoppingblockComponent } from './choppingblock.component';

describe('ChoppingblockComponent', () => {
  let component: ChoppingblockComponent;
  let fixture: ComponentFixture<ChoppingblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoppingblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoppingblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
