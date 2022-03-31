import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './features/home/news/news.component';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'auftragserfassung', loadChildren: () => import('./features/auftragserfassung/auftragserfassung.module').then(m => m.AuftragserfassungModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
