import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    /*path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)*/
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'puestos',
    loadChildren: () => import('./components/puestos/puestos.module').then( m => m.PuestosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
