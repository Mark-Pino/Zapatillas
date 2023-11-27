import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetupComponent} from './setup.component';

const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    children: [
      {
        path: 'usuari',
        loadChildren: () => import('./usuari/usuari.module').then(m => m.UsuariModule),
      },

      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
      },

      {
        path: 'categori',
        loadChildren: () => import('./categori/categori.module').then(m => m.CategoriModule),
      },

      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },

      {
        path: 'pedid',
        loadChildren: () => import('./pedid/pedid.module').then(m => m.PedidModule),
      },

      {
        path: 'pag',
        loadChildren: () => import('./pag/pag.module').then(m => m.PagModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupRoutingModule {
}

