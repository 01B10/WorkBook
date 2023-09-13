import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
  MediaMatcher,
  Breakpoints,
} from '@angular/cdk/layout';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  sidebarVisible: boolean = false;
  witdthBag = '21.5rem';
  toggleMenu = false;
  icon = 'fa-solid fa-bars';
  private document = inject(DOCUMENT);
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width:500px)', '(min-width:500px)', '(min-width:925px)'])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints['(max-width:500px)']) {
          this.witdthBag = '100%';
        } else if (state.breakpoints['(min-width:925px)']) {
          this.witdthBag = '21.5rem';
        } else if (state.breakpoints['(min-width:500px)']) {
          this.witdthBag = '80%';
        }
      });
  }

  ngAfterViewInit(): void {
    this.document.addEventListener('click', (e: any) => {
      if (!e.target.closest('.toggleIcon')) {
        this.icon = 'fa-solid fa-bars';
        this.toggleMenu = false;
      }
    });
  }

  showBag() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleIcon() {
    this.toggleMenu = !this.toggleMenu;
    this.toggleMenu
      ? (this.icon = 'fa-solid fa-xmark')
      : (this.icon = 'fa-solid fa-bars');
  }
}
