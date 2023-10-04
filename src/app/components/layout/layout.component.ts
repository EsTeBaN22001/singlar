import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  hiddenMenu: boolean = false;

  menuItems = [
    {
      icon: 'fa-cloud',
      text: 'Microsoft Purview',
      subItems: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
    {
      icon: 'fa-file-lines',
      text: 'Informes',
      subItems: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
    {
      icon: 'fa-sliders',
      text: 'Utilidades',
      subItems: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
    {
      icon: 'fa-screwdriver-wrench',
      text: 'Administración',
      subItems: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
    {
      icon: 'fa-file-lines',
      text: 'Manuales',
      subItems: [{ icon: 'fa-globe', text: 'Compañías', routerLink: '/' }],
    },
  ];

  toggleMenu() {
    this.hiddenMenu = !this.hiddenMenu;
    console.log(`Estado del menú: ${this.hiddenMenu}`);
  }
}
