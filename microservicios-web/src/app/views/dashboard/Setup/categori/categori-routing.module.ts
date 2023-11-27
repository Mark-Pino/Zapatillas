import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoriComponent} from './categori.component';
import {CategoriContainersComponent} from "./container/categori-containers.component";
import {CategoriNewComponent} from "./components/forms/categori-new.component";
import {CategoriEditComponent} from "./components/forms/categori-edit.component";


const routes: Routes = [
  {
    path: '',
    component: CategoriComponent,
    children: [
      {
        path: '',
        component: CategoriContainersComponent,
        data: {
          title: 'Categoria'
        }
      },
      {
        path: 'new',
        component: CategoriNewComponent,
        data: {
          title: 'Categoria'
        }
      }
      ,
      {
        path: 'edit',
        component: CategoriEditComponent,
        data: {
          title: 'Categoria'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriRoutingModule {
}

export const rutedComponents = [
  CategoriContainersComponent,
  CategoriComponent,
];
