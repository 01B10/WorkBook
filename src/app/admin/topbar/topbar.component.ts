import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  item: MenuItem[] | undefined;
  ngOnInit() {
    this.item = [
      {
        label: '',
        icon: 'far fa-envelope',
      },
      {
        label: '',
        icon: 'far fa-user',
        items: [
          {
            label: 'Thông tin',
            icon: 'fas fa-info',
          },
          {
            label: 'Cập nhật',
            icon: 'fas fa-user-edit',
          },
          {
            label: 'Biến hình',
            icon: 'fas fa-yin-yang',
          },
          {
            label: 'Đăng xuất',
            icon: 'fas fa-sign-out-alt',
          },
        ],
      },
      {
        label: 'Đăng xuất',
        icon: 'fas fa-sign-out-alt',
      },
    ];
  }
}
