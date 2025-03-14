import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons',
    loadComponent: () => import('./pages/pokemons/pokemons-page.component')
  },
  // {
  //   path: 'pokemons/:id',
  //   loadComponent: () => import('./pages/pokemon-information/pokemon-information.component'),
  //   data: {
  //     prerender: true
  //   },
  //   providers: [
  //     {
  //       provide: 'getPrerenderParams',
  //       useValue: () => {
  //         // Devuelve una lista de objetos con los parámetros que quieres pre-renderizar
  //         return [{ id: '1' }, { id: '2' }, { id: '3' }]; // Ajusta esto según tus necesidades
  //       }
  //     }
  //   ]
  // },
  {
    path: 'pokemons/:id',
    loadComponent: () => import('./pages/pokemon-information/pokemon-information.component'),
    data: {
      prerender: false // Desactiva el prerendering para esta ruta
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component')
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component')
  },
  {
    path: '**', // Ruta comodín para cualquier ruta no definida
    redirectTo: 'about' // Redirige a 'about' como cadena de texto
  }
];
