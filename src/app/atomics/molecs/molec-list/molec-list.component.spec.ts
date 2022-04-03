import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolecListComponent } from './molec-list.component';

describe('MolecListComponent', () => {
  let component: MolecListComponent;
  let fixture: ComponentFixture<MolecListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolecListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
