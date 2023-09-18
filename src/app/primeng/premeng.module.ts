import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';

const PremengComponent = [
  BadgeModule,
  SidebarModule,
  ButtonModule,
  StyleClassModule,
  DividerModule,
  TabMenuModule,
  TabViewModule,
  InputTextModule,
];

@NgModule({
  imports: [PremengComponent],
  exports: [PremengComponent],
})
export class PremengModule {}
