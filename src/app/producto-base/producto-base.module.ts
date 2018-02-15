import { DaviviendaLoginComponent } from './../davivienda-login/davivienda-login.component';
import { NgModule } from '@angular/core';
import { ProductoBaseComponent } from './producto-base.component';
import { ProductoBaseLoginComponent } from './producto-base-login/producto-base-login.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routes-davivienda';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: ProductoBaseLoginComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [ProductoBaseComponent, ProductoBaseLoginComponent],
  providers: [],
})
export class ProductoBaseModule {}
