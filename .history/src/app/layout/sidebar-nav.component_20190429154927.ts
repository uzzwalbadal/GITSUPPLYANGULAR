import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { MenuItem } from '@shared/layout/menu-item';

@Component({
    templateUrl: './sidebar-nav.component.html',
    selector: 'sidebar-nav',
    encapsulation: ViewEncapsulation.None
})
export class SideBarNavComponent extends AppComponentBase {

    menuItems: MenuItem[] = [
        new MenuItem(this.l('HomePage'), '', 'home', '/app/home'),
        new MenuItem(this.l('Products'), '', 'aeroplane', '/app/products'),
        new MenuItem(this.l('Stock Inventory'), '', '', '/app/stockinventory'),
        new MenuItem(this.l('Order Tracking'), '', '', '/app/ordertracking'),
        new MenuItem(this.l('Supply'), '', '', '/app/suppliers'),
        new MenuItem(this.l('Customers'), '', '', '/app/customers'),
        new MenuItem(this.l('Transaction'), '', '', '/app/transaction'),
        new MenuItem(this.l('Maps'), '', '', '/app/maps'),
        new MenuItem(this.l('Complaints'), '', '', '/app/documents'),
         new MenuItem(this.l('Manage'), '', 'menu', '', [
        new MenuItem(this.l('Tenants'), 'Pages.Tenants', 'business', '/app/tenants'),
        new MenuItem(this.l('Users'), 'Pages.Users', 'people', '/app/users'),
        new MenuItem(this.l('Roles'), 'Pages.Roles', 'local_offer', '/app/roles'),
        new MenuItem(this.l('About'), '', 'info', '/app/about'),
        ])
    ];

    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    showMenuItem(menuItem): boolean {
        if (menuItem.permissionName) {
            return this.permission.isGranted(menuItem.permissionName);
        }

        return true;
    }
}
