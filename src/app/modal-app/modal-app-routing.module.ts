import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAppPage } from './modal-app.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAppPageRoutingModule {}
