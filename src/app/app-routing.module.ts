import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCoinComponent } from './pages/page-coin/page-coin.component';
import { PageDashBoardComponent } from './pages/page-dash-board/page-dash-board.component';


const routes: Routes = [
  {
    path: '',
    component: PageDashBoardComponent,
  },
  {
    path: 'coin',
    component: PageCoinComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
