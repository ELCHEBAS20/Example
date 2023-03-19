import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppExamplePage } from './app-example.page';

const routes: Routes = [
  {
    path: '',
    component: AppExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppExamplePageRoutingModule {}
