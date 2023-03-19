import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'app-juego',
    loadChildren: () => import('./app-juego-main/app-example.module').then(m => m.AppExamplePageModule)
  },
  {
    path: 'modal-app',
    loadChildren: () => import('./modal-app/modal-app.module').then(m => m.ModalAppPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
