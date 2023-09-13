import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';

const PremengComponent = [
  BadgeModule,
  SidebarModule,
  ButtonModule,
  StyleClassModule,
  DividerModule,
];

@NgModule({
  imports: [PremengComponent],
  exports: [PremengComponent],
})
export class PremengModule {}
