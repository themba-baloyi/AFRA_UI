import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'table-list', title: 'Finances',  icon: 'account_balance', class: '' },
    { path: 'typography', title: 'Recovery',  icon: 'library_books', class: '' },
    { path: 'icons', title: 'Resources',  icon: 'group_add', class: '' },
    { path: 'maps', title: 'Projects',  icon: 'folder', class: '' },
    { path: 'notifications', title: 'Invoices',  icon: 'notifications', class: '' },
    { path: 'upgrade', title: 'Users Access',  icon: 'unarchive', class: 'active-pro' },
    { path: 'user-profile', title: 'User Profile',  icon: 'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
