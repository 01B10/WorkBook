import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('imgSmall') allImgSmalls!: QueryList<ElementRef>;
  @ViewChildren('imgLarge') allImgLarges!: QueryList<ElementRef>;
  items!: MenuItem[];
  activeItem!: MenuItem;
  tab: string | undefined;
  popularListBook: any[] = [];
  ngOnInit(): void {
    this.items = [
      { label: 'New Books', icon: 'fa-solid fa-book-medical' },
      { label: 'On Sale', icon: 'fa fa-bolt' },
    ];
    this.activeItem = this.items[0];
    this.tab = this.items[0].label;
    this.popularListBook = [
      {
        id: 1,
        img: 'assets/img/author-book-store-book-cover-06-300x450.jpg',
        content: 'Book1',
      },
      {
        id: 2,
        img: 'assets/img/author-book-store-book-cover-06-300x450.jpg',
        content: 'Book2',
      },
      {
        id: 3,
        img: 'assets/img/author-book-store-book-cover-06-300x450.jpg',
        content: 'Book3',
      },
      {
        id: 4,
        img: 'assets/img/author-book-store-book-cover-06-300x450.jpg',
        content: 'Book4',
      },
      {
        id: 5,
        img: 'assets/img/author-book-store-book-cover-06-300x450.jpg',
        content: 'Book5',
      },
      {
        id: 6,
        img: 'assets/img/author-book-store-book-cover-06-300x450.jpg',
        content: 'Book6',
      },
      {
        id: 7,
        img: 'assets/img/author-book-store-book-cover-06-300x450.jpg',
        content: 'Book7',
      },
      {
        id: 8,
        img: 'assets/img/author-book-store-book-cover-06-300x450.jpg',
        content: 'Book8',
      },
    ];
  }

  ngAfterViewInit(): void {
    [...this.allImgSmalls][0].nativeElement.classList.add('active');
    [...this.allImgLarges][0].nativeElement.classList.add('active');
    const removeBgImgSmall = () => {
      this.allImgSmalls.forEach((item) =>
        item.nativeElement.classList.remove('active')
      );

      this.allImgLarges.forEach((item) => {
        item.nativeElement.classList.remove('active');
      });
    };
    this.allImgSmalls.forEach((item, index) => {
      item.nativeElement.addEventListener('click', (e: any) => {
        removeBgImgSmall();
        [...this.allImgLarges][index].nativeElement.classList.add('active');

        item.nativeElement.classList.add('active');
      });
    });
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    this.tab = event.label;
    console.log(event.label);
  }
}
