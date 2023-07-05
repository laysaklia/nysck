import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment as env } from 'src/environments/environment.prod';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fhome',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    title: `${env.appName} - Home`,
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contatos',
    title: `${env.appName} - Contate-nos`,
    loadChildren: () => import('./page/contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'sobre',
    title: `${env.appName} - Sobre`,
    loadChildren: () => import('./page/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'pdv',
    title: `${env.appName} - Políticas de privacidade`,
    loadChildren: () => import('./page/pdv/pdv.module').then( m => m.PdvPageModule)
  },
  {
    path: 'erro404',
    title: `${env.appName} - Error 404`,
    loadChildren: () => import('./page/erro404/erro404.module').then( m => m.Erro404PageModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
