import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {DashboardModule} from './components/dashboard/dashboard.module';
import {SideNavModule} from './components/sidenav/sidenav.module';
import {DiagnoseService} from './components/diagnose/diagnose.service';
import {StateModule} from './state/state.module';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    /* Eagerly loaded modules, others are loaded lazy */
    SideNavModule,
    DashboardModule,
    StateModule.forRoot()
  ],
  providers: [DiagnoseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
