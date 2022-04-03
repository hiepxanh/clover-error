import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDaskBoardComponent } from './page-dask-board.component';

describe('PageDaskBoardComponent', () => {
  let component: PageDaskBoardComponent;
  let fixture: ComponentFixture<PageDaskBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDaskBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
