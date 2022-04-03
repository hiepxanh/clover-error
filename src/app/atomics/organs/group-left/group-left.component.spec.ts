import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLeftComponent } from './group-left.component';

describe('GroupLeftComponent', () => {
  let component: GroupLeftComponent;
  let fixture: ComponentFixture<GroupLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
