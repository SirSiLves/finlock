import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/authentication.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent  {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/user/anmelden']);
  }
}
