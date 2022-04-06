import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AuthenticationService } from '../../core/authentication.service';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    canActivate: [AuthenticationService]
  },
  {
    path: 'news',
    component: NewsComponent,
    canActivate: [AuthenticationService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
