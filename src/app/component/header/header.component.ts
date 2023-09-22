import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  sidebarVisible = false;
  witdthBag = '21.5rem';
  toggleMenu = false;
  toggleSearch = false;
  inputSearch = false;
  icon = 'fa-solid fa-bars';
  menuVisible = false;
  breakPoint = false;
  hiddenIconSearch = false;
  @ViewChild('setBanner', { static: true }) banner!: ElementRef;
  @ViewChild('titleBanner', { static: true }) titleBanner!: ElementRef;
  private document = inject(DOCUMENT);
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        '(max-width:500px)',
        '(max-width:770px)',
        '(max-width:925px)',
        '(min-width:500px)',
        '(min-width:925px)',
      ])
      .subscribe((state: BreakpointState) => {
        // if (state.breakpoints['(min-width:500px)']) {
        //   console.log('kaak');

        //   this.witdthBag = '100%';
        //   this.sidebarVisible = false;
        //   this.menuVisible = false;
        //   this.toggleMenu = false;
        //   this.inputSearch = false;
        //   this.icon = 'fa-solid fa-bars';
        // }
        if (state.breakpoints['(max-width:500px)']) {
          this.witdthBag = '100%';
          this.sidebarVisible = false;
          this.menuVisible = false;
          this.toggleMenu = false;
          this.breakPoint = true;
          this.icon = 'fa-solid fa-bars';
        } else if (state.breakpoints['(max-width:925px)']) {
          this.witdthBag = '80%';
          this.breakPoint = true;
          this.sidebarVisible = false;
          this.menuVisible = false;
          this.toggleMenu = false;
          this.toggleSearch = false;
          this.inputSearch = false;
          this.icon = 'fa-solid fa-bars';
        } else if (state.breakpoints['(min-width:925px)']) {
          this.witdthBag = '21.5rem';
          this.menuVisible = true;
          this.breakPoint = false;
          this.toggleSearch = false;
          this.inputSearch = false;
        }
      });
  }

  ngAfterViewInit(): void {
    this.banner.nativeElement.style.backgroundImage = `linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.6)),
      url('assets/img/671822c2f63dd5f65d8fd15c9710420b.jpg')`;

    this.titleBanner.nativeElement.innerHTML = `
    <h1 class="text-[25px] min-[775px]:text-[50px] text-white">BOOK'S</h1>
    <h2 class="text-white text-[15x] min-[775px]:text-[30px] font-light">MULTIPURPOSE STORE</h2>
    <a routerLink=""
        class="bg-slate-200 py-2 px-7 font-bold min-[775px]:py-3 min-[775px]:px-[70px] transition duration-150 ease-out hover:bg-slate-500 hover:text-white cursor-pointer">SHOP
        NOW</a>`;

    this.document.addEventListener('click', (e: any) => {
      if (e.target.closest('.fa-xmark')) {
        return;
      }
      if (!e.target.closest('.toggleIcon') && this.breakPoint) {
        this.icon = 'fa-solid fa-bars';
        this.toggleMenu = false;
        this.menuVisible = false;
      }
    });
    this.document.addEventListener('scroll', () => {
      if (this.breakPoint) {
        this.icon = 'fa-solid fa-bars';
        this.toggleMenu = false;
        this.menuVisible = false;
      }

      // this.inputSearch = false;
    });
    if (this.router.url === '/books') {
      console.log('kaka');

      this.banner.nativeElement.style.backgroundImage = `linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.6)),
      url('assets/img/Essential-Books.jpg')`;
      this.titleBanner.nativeElement.innerHTML = `
      <h1 class="text-[25px] min-[775px]:text-[50px] text-white">LIBRARY</h1>
      <h2 class="text-white text-[15x] min-[775px]:text-[30px] font-light">Choose and read your favorite books!</h2>
      <a routerLink=""
          class="bg-slate-200 py-2 px-7 font-bold min-[775px]:py-3 min-[775px]:px-[70px] transition duration-150 ease-out hover:bg-slate-500 hover:text-white rounded-3xl cursor-pointer">EXPLORE
      </a>`;
      this.hiddenIconSearch = true;
    } else if (this.router.url === '/about') {
      this.banner.nativeElement.style.backgroundImage = `linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.6)),
      url('assets/img/Books_and_Library.jpeg')`;
      this.titleBanner.nativeElement.innerHTML = `
      <h1 class="text-[30px] min-[775px]:text-[65px] text-white">WHO ARE WHERE?</h1>`;
    } else if (this.router.url === '/contact') {
      this.banner.nativeElement.style.backgroundImage = `linear-gradient(rgba(4, 9, 30, 0.6), rgba(4, 9, 30, 0.6)),
      url('assets/img/tmb_OurSalesContact-1200x628.jpg')`;
      this.titleBanner.nativeElement.innerHTML = `
    <h1 class="text-[25px] min-[775px]:text-[50px] text-white">CONTACT US</h1>`;
    }
  }

  showBag() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleIconMenu() {
    this.toggleMenu = !this.toggleMenu;
    this.menuVisible = !this.menuVisible;
    this.toggleMenu
      ? (this.icon = 'fa-solid fa-xmark')
      : (this.icon = 'fa-solid fa-bars');
  }

  toggleIconSearch() {
    this.breakpointObserver
      .observe(['(max-width:770px)'])
      .subscribe((state: BreakpointState) => {
        if (!state.breakpoints['(max-width:770px)']) {
          this.toggleSearch = true;
          this.menuVisible = false;
        } else {
          this.toggleSearch = false;
          this.inputSearch = !this.inputSearch;
        }
      })
      .unsubscribe();
  }

  toggleIconX() {
    this.toggleSearch = false;
    this.inputSearch = false;
    if (this.breakPoint) {
      this.menuVisible = false;
    } else {
      this.menuVisible = true;
    }
  }
}
