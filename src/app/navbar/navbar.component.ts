import { Component, OnInit, ViewEncapsulation, HostListener   } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  mostrar = false;
  topMenu = false;
  constructor() { }

  ngOnInit() {
  }
  toogle(e) {
    // const target: HTMLElement = e.target;
     // target.classList.toggle('showing');
    this.mostrar = !this.mostrar;
  }

  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowsScroll($event: Event) {
    const scrollOffset = $event.srcElement.children[0].scrollTop;
    if (scrollOffset === 0) {
      // console.log('scrolltop');
      this.topMenu = false;
    } else {
      this.topMenu = true;
    }
  }

}
