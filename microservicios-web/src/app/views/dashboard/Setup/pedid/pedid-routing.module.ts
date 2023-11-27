import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PedidComponent} from './pedid.component';
import {PedidContainersComponent} from "./container/pedid-containers.component";
import {PedidNewComponent} from "./components/forms/pedid-new.component";
import {PedidEditComponent} from "./components/forms/pedid-edit.component";


const routes: Routes = [
  {
    path: '',
    component: PedidComponent,
    children: [
      {
        path: '',
        component: PedidContainersComponent,
        data: {
          title: 'Pedido'
        }
      },
      {
        path: 'new',
        component: PedidNewComponent,
        data: {
          title: 'Pedid'
        }
      }
      ,
      {
        path: 'edit',
        component: PedidEditComponent,
        data: {
          title: 'Pedido'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidRoutingModule {
}

export const rutedComponents = [
  PedidContainersComponent,
  PedidComponent,
];
