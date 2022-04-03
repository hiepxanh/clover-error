import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplateDaskBoardComponent } from './teamplate-dask-board.component';

describe('TeamplateDaskBoardComponent', () => {
  let component: TeamplateDaskBoardComponent;
  let fixture: ComponentFixture<TeamplateDaskBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamplateDaskBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplateDaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
