import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'inicio/:page',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'personaje/:id/:page',
        loadChildren: () => import('./personaje/personaje.module').then(m => m.PersonajeModule)
      },
      {
        path: 'episodios',
        loadChildren: () => import('./episodios/episodios.module').then(m => m.EpisodiosModule)
      },
      {
        path: 'episodios/:page',
        loadChildren: () => import('./episodios/episodios.module').then(m => m.EpisodiosModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  }
];


// const routes: Routes = [
//   {
//     path: '',
//     component: LayoutComponent,
//     children:[
//       {
//         path:'',
//         pathMatch: 'full',
//         redirectTo: 'inicio'
//       },
//       {
//         path:'inicio',
//         component: InicioComponent
//       },
//       {
//         path:'inicio/:page',
//         component: InicioComponent
//       },
//       {
//         path:'personaje/:id/:page',
//         component: PersonajeComponent
//       },
//       {
//         path: 'episodios',
//         component: EpisodiosComponent
//       },
//       {
//         path: 'episodios/:page',
//         component: EpisodiosComponent
//       },
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
