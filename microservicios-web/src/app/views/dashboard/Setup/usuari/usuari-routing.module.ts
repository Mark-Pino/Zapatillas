import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsuariComponent} from './usuari.component';
import {UsuariContainersComponent} from "./container/usuari-containers.component";
import {UsuariNewComponent} from "./components/forms/usuari-new.component";
import {UsuariEditComponent} from "./components/forms/usuari-edit.component";


const routes: Routes = [
  {
    path: '',
    component: UsuariComponent,
    children: [
      {
        path: '',
        component: UsuariContainersComponent,
        data: {
          title: 'Auth'
        }
      },
      {
        path: 'new',
        component: UsuariNewComponent,
        data: {
          title: 'Auth'
        }
      }
      ,
      {
        path: 'edit',
        component: UsuariEditComponent,
        data: {
          title: 'Auth'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariRoutingModule {
}

export const rutedComponents = [
  UsuariContainersComponent,
  UsuariComponent,
];
