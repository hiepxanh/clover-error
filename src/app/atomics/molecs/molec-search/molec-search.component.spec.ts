import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolecSearchComponent } from './molec-search.component';

describe('MolecSearchComponent', () => {
  let component: MolecSearchComponent;
  let fixture: ComponentFixture<MolecSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolecSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolecSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
