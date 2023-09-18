import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;
  tab: string | undefined;
  ngOnInit(): void {
    this.items = [
      { label: 'New Books', icon: 'fa-solid fa-book-medical' },
      { label: 'On Sale', icon: 'fa fa-bolt' },
    ];
    this.activeItem = this.items[0];
    this.tab = this.items[0].label;
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    this.tab = event.label;
    console.log(event.label);
  }
}
