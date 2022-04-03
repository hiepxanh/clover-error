import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomBtnCoinComponent } from './atom-btn-coin.component';

describe('AtomBtnCoinComponent', () => {
  let component: AtomBtnCoinComponent;
  let fixture: ComponentFixture<AtomBtnCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomBtnCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomBtnCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
