import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {PedidRoutingModule, rutedComponents} from './pedid-routing.module';

import {ConfirmDialogModule, FormsComponentValidModule, PaginationModule} from '../../../../shared';
import {ButtonModule, CardModule, GridModule} from '@coreui/angular';
import {PedidListComponent} from "./components/list/pedid-list.component";
import {PedidsService} from "../../../../providers/services/setup/pedids.service";
import {PedidNewComponent} from "./components/forms/pedid-new.component";
import {PedidEditComponent} from "./components/forms/pedid-edit.component";

const SHARED_MODULES: any[] = [
  ConfirmDialogModule,
  FormsComponentValidModule,
  PaginationModule,
];

const COMPONENTS: any[] = [PedidListComponent, PedidNewComponent, PedidEditComponent];

const SERVICES: any[] = [PedidsService];

const NG_MODULES: any = [];

const NGB_MODULES: any = [
  NgbModalModule,
  // NgbPopoverModule,
];
const PIPES: any = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PedidRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    ...SHARED_MODULES,
    ...NG_MODULES,
    ...NGB_MODULES,
  ],
  declarations: [
    ...COMPONENTS,
    ...rutedComponents,
    ...PIPES,

  ],
  providers: [
    ...SERVICES,
  ],
  exports: []
})
export class PedidModule {
}
