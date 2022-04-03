import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCoinComponent } from './group-coin.component';

describe('GroupCoinComponent', () => {
  let component: GroupCoinComponent;
  let fixture: ComponentFixture<GroupCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
