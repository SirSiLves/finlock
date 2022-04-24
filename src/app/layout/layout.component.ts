import { Component, HostListener, OnInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  mobile$ = this.layoutService.mobile;

  constructor(
    private layoutService: LayoutService
  ) { }


  ngOnInit(): void {
    this.layoutService.setMobile(window.innerWidth);
  }

  @HostListener("window:resize", [])
  onResize(): void {
    this.layoutService.setMobile(window.innerWidth);
  }

}
