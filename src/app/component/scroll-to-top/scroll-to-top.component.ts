import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Inject,
  Host,
  inject,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnInit, AfterViewInit {
  @ViewChild('scroll') scroll!: ElementRef;
  private document = inject(DOCUMENT);
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 900) {
        this.scroll.nativeElement.classList.add('active');
      } else {
        this.scroll.nativeElement.classList.remove('active');
      }
    });
  }

  scrollToTop = () => {
    const c =
      this.document.documentElement.scrollTop || this.document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(this.scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
}
