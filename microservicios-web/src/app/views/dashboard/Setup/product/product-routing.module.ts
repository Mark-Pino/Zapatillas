import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductComponent} from './product.component';
import {ProductContainersComponent} from "./container/product-containers.component";
import {ProductNewComponent} from "./components/forms/product-new.component";
import {ProductEditComponent} from "./components/forms/product-edit.component";


const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductContainersComponent,
        data: {
          title: 'Producto'
        }
      },
      {
        path: 'new',
        component: ProductNewComponent,
        data: {
          title: 'Producto'
        }
      }
      ,
      {
        path: 'edit',
        component: ProductEditComponent,
        data: {
          title: 'Producto'
        }
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {
}

export const rutedComponents = [
  ProductContainersComponent,
  ProductComponent,
];
