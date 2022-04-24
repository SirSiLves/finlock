import { Component, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  destroy$ = new Subject();
  mobile$ = this.layoutService.mobile;

  constructor(
    private layoutService: LayoutService
  ) {
  }


  ngOnInit(): void {
    this.layoutService.setMobile(window.innerWidth);
  }

}
