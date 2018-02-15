import { DaviviendaLoginComponent } from './davivienda-login/davivienda-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', component: DaviviendaLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaviviendaRoutingRoutingModule {}
