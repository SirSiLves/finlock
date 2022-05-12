import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { menuWithALlLinks } from '@test/menu-data';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread-crump',
  templateUrl: './bread-crump.component.html',
  styleUrls: ['./bread-crump.component.scss']
})
export class BreadCrumpComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();

  crumpList: MenuItem[] = [];


  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.onDestroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.crumpList = [];
        this.createBreadCrump(event.url, menuWithALlLinks);
        this.crumpList.unshift(  {
          label: 'Startseite',
          icon: 'pi pi-fw pi-home',
          routerLink: '/home/news'
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private createBreadCrump(url: string, menu: MenuItem[]): void {
    menu.forEach(m => {
      if (m.items && m.items.length > 0) {
        const currentSize = this.crumpList.length;
        this.createBreadCrump(url, m.items);

        if (currentSize < this.crumpList.length) {
          this.crumpList.unshift(m);
        }
      }

      if (url.includes(m.routerLink)) {
        if (!this.crumpList.find(elemnt => m === elemnt)) {
          this.crumpList.push(m);
        }
      }
    });
  }

}
