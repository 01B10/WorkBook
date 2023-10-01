import { DOCUMENT } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MenuItem } from 'primeng/api';

interface Selected {
  name: string;
  code: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit, AfterViewInit, AfterViewChecked {
  rangeValues: number[] = [20, 80];
  items: MenuItem[] | undefined;
  sorting: Selected[] | undefined;

  selected: Selected | undefined;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.items = [
      { icon: 'fa-solid fa-house', routerLink: '/' },
      { label: 'books', routerLink: '/books' },
    ];
    this.sorting = [
      { name: 'New York', code: 0 },
      { name: 'Rome', code: 1 },
      { name: 'London', code: 2 },
      { name: 'Istanbul', code: 3 },
      { name: 'Paris', code: 4 },
    ];
  }
  ngAfterViewInit(): void {
    let priceGap = 1000;
    const rangeInput =
      this.document.querySelectorAll<any>('.range-input input');
    const priceInput =
      this.document.querySelectorAll<any>('.price-input input');
    const progress =
      this.document.querySelector<HTMLDivElement>('.slider .progress');
    priceInput.forEach((input) => {
      input.addEventListener('input', (e: any) => {
        let minVal = parseInt(priceInput[0].value),
          maxVal = parseInt(priceInput[1].value);
        if (maxVal - minVal >= priceGap && maxVal <= 10000 && progress) {
          if (e.target.className === 'input-min') {
            rangeInput[0].value = minVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
          } else {
            rangeInput[1].value = maxVal;
            progress.style.right =
              100 - (maxVal / rangeInput[1].max) * 100 + '%';
          }
        }
      });
    });
    rangeInput.forEach((input) => {
      input.addEventListener('input', (e: any) => {
        let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap && progress) {
          if (e.target.className === 'range-min') {
            priceInput[0].value = maxVal - priceGap;
            rangeInput[0].value = priceInput[0].value;
            progress.style.left =
              (priceInput[0].value / rangeInput[0].max) * 100 + '%';
          } else {
            priceInput[1].value = minVal + priceGap;
            rangeInput[1].value = priceInput[1].value;
            progress.style.right =
              100 - (priceInput[1].value / rangeInput[0].max) * 100 + '%';
          }
        } else {
          if (progress) {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
            progress.style.right =
              100 - (maxVal / rangeInput[1].max) * 100 + '%';
          }
        }
      });
    });
  }
  ngAfterViewChecked(): void {
    console.log(this.selected);
  }
}
