import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log(this.router.url);

    this.items = [
      { icon: 'fa-solid fa-house', routerLink: '/' },
      { label: this.router.url.split('/')[1], routerLink: this.router.url },
    ];
  }
}
