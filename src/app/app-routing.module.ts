import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './core/authentication.service';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canLoad: [AuthenticationService]
  },
  {
    path: 'auftragserfassung',
    loadChildren: () => import('./features/auftragserfassung/auftragserfassung.module').then(m => m.AuftragserfassungModule),
    canLoad: [AuthenticationService]
  },
  {
    path: 'auftragsverwaltung',
    loadChildren: () => import('./features/auftragsverwaltung/auftragsverwaltung.module').then(m => m.AuftragsverwaltungModule),
    canLoad: [AuthenticationService]
  },
  {
    path: 'kontakt', loadChildren: () => import('./features/kontakt/kontakt.module').then(m => m.KontaktModule),
    canLoad: [AuthenticationService]
  },
  {
    path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home',
    canLoad: [AuthenticationService]
  },
  {
    path: '**', redirectTo: 'user/anmelden'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
