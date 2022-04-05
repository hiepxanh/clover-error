import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplateDashBoardComponent } from './teamplate-dash-board.component';

describe('TeamplateDashBoardComponent', () => {
  let component: TeamplateDashBoardComponent;
  let fixture: ComponentFixture<TeamplateDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamplateDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplateDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
