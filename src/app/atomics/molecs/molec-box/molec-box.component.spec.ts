import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolecBoxComponent } from './molec-box.component';

describe('MolecBoxComponent', () => {
  let component: MolecBoxComponent;
  let fixture: ComponentFixture<MolecBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolecBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolecBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
