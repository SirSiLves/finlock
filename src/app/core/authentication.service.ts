import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { users } from '@test/user-data';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanLoad, CanActivate {

  readonly user$ = new BehaviorSubject<any>(undefined);
  private readonly users = users;

  constructor(
    private router: Router
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.user$.pipe(map(user => !!user || this.router.parseUrl('/anmelden')));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.user$.pipe(map(user => !!user || this.router.parseUrl('/anmelden')));
  }

  getUser(): any {
    return this.user$.value;
  }

  setUser(user: any): void {
    this.user$.next(user);
  }

  logout(): void {
    this.user$.next(undefined);
  }

  login(user: any): boolean {
    const exist = this.users.filter(u => u.id === user.id && u.password === user.password);

    if (exist && exist.length === 1) {
      this.setUser(exist[0]);
      return true;
    } else {
      this.logout();
      return false;
    }
  }

}
