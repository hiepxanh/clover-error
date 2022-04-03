import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplateCoinComponent } from './teamplate-coin.component';

describe('TeamplateCoinComponent', () => {
  let component: TeamplateCoinComponent;
  let fixture: ComponentFixture<TeamplateCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamplateCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplateCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
