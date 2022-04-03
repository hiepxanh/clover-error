import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolecMainCoinComponent } from './molec-main-coin.component';

describe('MolecMainCoinComponent', () => {
  let component: MolecMainCoinComponent;
  let fixture: ComponentFixture<MolecMainCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolecMainCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolecMainCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
