import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomMenuListComponent } from './atom-menu-list.component';

describe('AtomMenuListComponent', () => {
  let component: AtomMenuListComponent;
  let fixture: ComponentFixture<AtomMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
