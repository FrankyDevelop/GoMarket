import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    //path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'puestos',
    loadChildren: () => import('./components/puestos/puestos.module').then( m => m.PuestosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tab-productos',
    loadChildren: () => import('./productos/tab-productos/tab-productos.module').then( m => m.TabProductosPageModule)
  },
  {
    path: 'tab-reservas',
    loadChildren: () => import('./reservas/tab-reservas/tab-reservas.module').then( m => m.TabReservasPageModule)
  },
  {
    path: 'tab-presupuesto',
    loadChildren: () => import('./presupuesto/tab-presupuesto/tab-presupuesto.module').then( m => m.TabPresupuestoPageModule)
  },
  {
    path: 'tab-perfil',
    loadChildren: () => import('./perfil/tab-perfil/tab-perfil.module').then( m => m.TabPerfilPageModule)
  },
  {
    path: 'puestos',
    loadChildren: () => import('./productos/puestos/puestos.module').then( m => m.PuestosPageModule)
  },
  {
    path: 'tab-categoria',
    loadChildren: () => import('./productos/tab-categoria/tab-categoria.module').then( m => m.TabCategoriaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
