import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCoinComponent } from './pages/page-coin/page-coin.component';
import { PageDaskBoardComponent } from './pages/page-dask-board/page-dask-board.component';

const routes: Routes = [
  {
    path: '',
    component: PageDaskBoardComponent,
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
