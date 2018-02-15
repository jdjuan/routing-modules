import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DaviviendaLoginComponent } from './davivienda-login/davivienda-login.component';
import { DaviviendaRoutingRoutingModule } from './davivienda-routing.module';
import { NgModule } from '@angular/core';
import { ProductoBaseModule } from './producto-base/producto-base.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, DaviviendaLoginComponent],
  imports: [
    BrowserModule,
    DaviviendaRoutingRoutingModule,
    ProductoBaseModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
