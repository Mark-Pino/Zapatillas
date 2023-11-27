import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ClientComponent} from './client.component';
import {ClientContainersComponent} from "./container/client-containers.component";
import {ClientNewComponent} from "./components/forms/client-new.component";
import {ClientEditComponent} from "./components/forms/client-edit.component";


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: ClientContainersComponent,
        data: {
          title: 'Cliente'
        }
      },
      {
        path: 'new',
        component: ClientNewComponent,
        data: {
          title: 'Cliente'
        }
      }
      ,
      {
        path: 'edit',
        component: ClientEditComponent,
        data: {
          title: 'Cliente'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}

export const rutedComponents = [
  ClientContainersComponent,
  ClientComponent,
];
