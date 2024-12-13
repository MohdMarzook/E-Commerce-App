import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { faBars, faTachometerAlt, faShoppingBag, faShoppingCart, faTags, faMoneyBill, faComment, faUsers } from '@fortawesome/free-solid-svg-icons';
let SidebarComponent = class SidebarComponent {
    constructor() {
        this.isSidebarHidden = false;
        this.barIcon = faBars;
        this.data = [
            {
                path: '/admin/dashboard',
                icon: faTachometerAlt,
                name: 'Dashboard'
            },
            {
                path: '/admin/users',
                icon: faUsers,
                name: 'Users'
            },
            {
                path: '/admin/products',
                icon: faShoppingBag,
                name: 'Products'
            },
            {
                path: '/admin/add-products',
                icon: faShoppingCart,
                name: 'Add Products'
            },
            {
                path: '/admin/add-categories',
                icon: faTags,
                name: 'Add Category'
            }, {
                path: '/admin/orders',
                icon: faShoppingCart,
                name: 'Orders'
            },
            {
                path: '/admin/payment',
                icon: faMoneyBill,
                name: 'Payment'
            },
            {
                path: '/admin/feedback',
                icon: faComment,
                name: 'Feedback'
            }
        ];
    }
    toggleSidebar() {
        this.isSidebarHidden = !this.isSidebarHidden;
    }
};
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.css']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map