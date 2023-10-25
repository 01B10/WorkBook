import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [MessageService],
})
export class SideBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private messageService: MessageService,private router:Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'HOME',
        items: [
          {
            label: 'Dashboard',
            icon: 'fas fa-home',
            // routerLink: 'dashboard',
              command: () => {
                  this.router.navigate(['admin/dashboard']);
              }
          },
        ],
      },
      {
        label: 'MANAGER',
        items: [
          {
            label: 'Product',
            icon: 'fas fa-book',
            routerLink: 'products',
          },
          {
            label: 'Category',
            icon: 'fas fa-th-list',
            routerLink: 'category',
          },
        ],
      },
    ];
  }

  //   update() {
  //     this.messageService.add({
  //       severity: 'success',
  //       summary: 'Success',
  //       detail: 'Data Updated',
  //     });
  //   }

  //   delete() {
  //     this.messageService.add({
  //       severity: 'warn',
  //       summary: 'Delete',
  //       detail: 'Data Deleted',
  //     });
  //   }
}
