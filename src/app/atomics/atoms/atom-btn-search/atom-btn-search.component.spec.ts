import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomBtnSearchComponent } from './atom-btn-search.component';

describe('AtomBtnSearchComponent', () => {
  let component: AtomBtnSearchComponent;
  let fixture: ComponentFixture<AtomBtnSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomBtnSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomBtnSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
