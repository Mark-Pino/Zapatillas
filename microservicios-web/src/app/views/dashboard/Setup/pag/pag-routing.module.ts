import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagComponent} from './pag.component';
import {PagContainersComponent} from "./container/pag-containers.component";
import {PagNewComponent} from "./components/forms/pag-new.component";
import {PagEditComponent} from "./components/forms/pag-edit.component";


const routes: Routes = [
  {
    path: '',
    component: PagComponent,
    children: [
      {
        path: '',
        component: PagContainersComponent,
        data: {
          title: 'Pago'
        }
      },
      {
        path: 'new',
        component: PagNewComponent,
        data: {
          title: 'Pago'
        }
      }
      ,
      {
        path: 'edit',
        component: PagEditComponent,
        data: {
          title: 'Pago'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagRoutingModule {
}

export const rutedComponents = [
  PagContainersComponent,
  PagComponent,
];
