import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Status',         icon:'nc-check-2',       class: '' },
    { path: '/users',         title: 'Users',        icon:'nc-single-02',    class: '' },
    { path: '/icons',         title: 'Alerts',             icon:'nc-bell-55',    class: '' },
    { path: '/maps',          title: 'Privacy',              icon:'nc-key-25',      class: '' },
    { path: '/notifications', title: 'Devices',     icon:'nc-mobile',    class: '' },
    { path: '/user',          title: 'Performance',      icon:'nc-chart-bar-32',  class: '' },
    { path: '/table',         title: 'Reports',        icon:'nc-paper',    class: '' },
    { path: '/typography',    title: 'Account',        icon:'nc-circle-09', class: '' },
    { path: '/upgrade',       title: 'More',    icon:'nc-bullet-list-67',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
