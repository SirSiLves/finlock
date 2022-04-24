import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-jump',
  templateUrl: './jump.component.html',
  styleUrls: ['./jump.component.scss']
})
export class JumpComponent implements AfterViewChecked {

  visible = false;
  isLoading = false;

  constructor() {
  }

  jumpToStart(): void {
    document.getElementById('top-anchor')!.scrollIntoView({block: "start", behavior: "smooth"});
  }

  ngAfterViewChecked(): void {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.visible = document.getElementById('content-anchor')!.clientHeight > window.innerHeight;
      this.isLoading = false;
    }, 1);
  }
}
