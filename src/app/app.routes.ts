import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'pokemons',
    loadComponent: () => import('./pages/pokemons/pokemons-page.component')
  },
  {
    path:'pokemons/:id',
    loadComponent: () => import('./pages/pokemon-information/pokemon-information.component'),
    data: { renderMode: 'ssr' } // Evita prerenderizado, usa SSR dinámico
  },
  {
    path:'about',
    loadComponent: () => import('./pages/about/about.component')
  },
  {
    path:'pricing',
    loadComponent: () => import('./pages/pricing/pricing.component')
  },
  {
    path:'contact',
    loadComponent: () => import('./pages/contact/contact.component')
  },

  {
    path: '**', // Ruta comodín para cualquier ruta no definida
    redirectTo: 'about' // Redirige a 'about' como cadena de texto
  }
];
