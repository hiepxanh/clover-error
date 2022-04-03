import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolecHeaderCoinComponent } from './molec-header-coin.component';

describe('MolecHeaderCoinComponent', () => {
  let component: MolecHeaderCoinComponent;
  let fixture: ComponentFixture<MolecHeaderCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolecHeaderCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolecHeaderCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
