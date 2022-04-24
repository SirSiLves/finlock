import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  mobile = new BehaviorSubject<boolean>(false);

  constructor() { }

  setMobile(innerWidth: number): void {
    this.mobile.next(innerWidth < 720);
  }
}
