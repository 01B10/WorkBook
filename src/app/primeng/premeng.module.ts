import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputNumberModule } from 'primeng/inputnumber';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

const PremengComponent = [
  BadgeModule,
  SidebarModule,
  ButtonModule,
  StyleClassModule,
  DividerModule,
  TabMenuModule,
  TabViewModule,
  InputTextModule,
  AutoFocusModule,
  InputNumberModule,
  BreadcrumbModule,
  DropdownModule,
  PanelMenuModule,
  MegaMenuModule,
  MenubarModule,
  MenuModule
];

@NgModule({
  imports: [PremengComponent],
  exports: [PremengComponent],
})
export class PremengModule {}
