import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-jump',
  templateUrl: './jump.component.html',
  styleUrls: ['./jump.component.scss'],
  animations: [
    trigger('fadeAndScale', [
      transition(':enter', [
        style({transform: 'scale(0)', opacity: '0'}),
        animate('250ms ease-out', style({transform: 'scale(1)', opacity: '1'})),
      ]),
      transition(':leave', [
        animate('250ms ease-out', style({transform: 'scale(0)', opacity: '0'})),
      ]),
    ]),
  ]
})
export class JumpComponent implements OnInit {

  visible = false;

  constructor() {
  }

  jumpToStart(): void {
    document.getElementById('top-anchor')!.scrollIntoView({block: "start", behavior: "smooth"});
  }

  ngOnInit(): void {
    document.body.onscroll = (): void => {
      if (document.body.scrollTop !== 0) {
        this.visible = document.getElementById('content-anchor')!.clientHeight > window.innerHeight;
      } else {
        this.visible = false;
      }
    };
  }
}
