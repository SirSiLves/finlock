import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './core/authentication.service';
import { LoginComponent } from './features/user/login/login.component';
import { ImpressumComponent } from './features/home/impressum/impressum.component';
import { DsgvoComponent } from './features/home/dsgvo/dsgvo.component';

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
  },
  {
    path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
    canLoad: [AuthenticationService]
  },
  {
    path: 'lagerverwaltung',
    loadChildren: () => import('./features/lagerverwaltung/lagerverwaltung.module').then(m => m.LagerverwaltungModule),
    canLoad: [AuthenticationService]
  },
  {
    path: 'anmelden', component: LoginComponent
  },
  {
    path: 'impressum', component: ImpressumComponent
  },
  {
    path: 'dsgvo', component: DsgvoComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home',
    canLoad: [AuthenticationService]
  },
  {
    path: '**', redirectTo: 'home/news',
    canLoad: [AuthenticationService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
