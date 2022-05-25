import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AtomIconComponent from './atomics/atoms/atom-icon/atom-icon.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomBtnSearchComponent} from './atomics/atoms/atom-btn-search/atom-btn-search.component';
import { AtomInputComponent } from './atomics/atoms/atom-input/atom-input.component';
import { AtomMenuListComponent } from './atomics/atoms/atom-menu-list/atom-menu-list.component';
import { MolecBoxComponent } from './atomics/molecs/molec-box/molec-box.component';
import { MolecListComponent } from './atomics/molecs/molec-list/molec-list.component';
import { MolecSearchComponent } from './atomics/molecs/molec-search/molec-search.component';
import { GroupBoxComponent } from './atomics/organs/group-box/group-box.component';
import { GroupListComponent } from './atomics/organs/group-list/group-list.component';
import { GroupHeaderComponent } from './atomics/organs/group-header/group-header.component';
import { GroupLeftComponent } from './atomics/organs/group-left/group-left.component';
import { PageCoinComponent } from './pages/page-coin/page-coin.component';
import { AtomBtnCoinComponent } from './atomics/atoms/atom-btn-coin/atom-btn-coin.component';
import { MolecHeaderCoinComponent } from './atomics/molecs/molec-header-coin/molec-header-coin.component';
import { MolecMainCoinComponent } from './atomics/molecs/molec-main-coin/molec-main-coin.component';
import { GroupCoinComponent } from './atomics/organs/group-coin/group-coin.component';
import { TeamplateCoinComponent } from './atomics/teamplates/teamplate-coin/teamplate-coin.component';
import { PageDashBoardComponent } from './pages/page-dash-board/page-dash-board.component';
import { TeamplateDashBoardComponent } from './atomics/teamplates/teamplate-dash-board/teamplate-dash-board.component';

import { RendererModule, TransferHttpCacheModule } from '@nguniversal/common/clover';
// import { MAT_DATE_LOCALE } from '@angular/material/core';

// import { registerLocaleData } from '@angular/common';
// import localeCs from '@angular/common/locales/cs';
// registerLocaleData(localeCs);


@NgModule({
  declarations: [
    AppComponent,
    AtomIconComponent,
    AtomBtnSearchComponent,
    AtomInputComponent,
    AtomMenuListComponent,
    MolecBoxComponent,
    MolecListComponent,
    MolecSearchComponent,
    GroupBoxComponent,
    GroupListComponent,
    GroupHeaderComponent,
    GroupLeftComponent,
    PageCoinComponent,
    AtomBtnCoinComponent,
    MolecHeaderCoinComponent,
    MolecMainCoinComponent,
    GroupCoinComponent,
    TeamplateCoinComponent,
    PageDashBoardComponent,
    TeamplateDashBoardComponent,


  ],
  imports: [
    BrowserModule.withServerTransition({
     appId: 'myapp',
    }),
    RendererModule.forRoot(),
    TransferHttpCacheModule,
    AppRoutingModule,



  ],
  providers: [
    // {provide: LOCALE_ID, useValue: 'cs' },
    // { provide: DEFAULT_CURRENCY_CODE, useValue: 'CZK' },
    // { provide: MAT_DATE_LOCALE, useValue: 'cs' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
