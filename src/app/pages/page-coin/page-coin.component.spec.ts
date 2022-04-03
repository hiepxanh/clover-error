import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCoinComponent } from './page-coin.component';

describe('PageCoinComponent', () => {
  let component: PageCoinComponent;
  let fixture: ComponentFixture<PageCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
