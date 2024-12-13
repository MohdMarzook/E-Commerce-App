import { __decorate } from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(http) {
        this.http = http;
        this.data = [
            {
                name: 'Ordres',
                count: '100',
                routerLink: '/admin/users'
            },
            {
                name: 'Ordres',
                count: '100',
                routerLink: '/admin/orders'
            },
            {
                name: 'Ordres',
                count: '100',
                routerLink: '/admin/orders'
            },
            {
                name: 'Ordres',
                count: '100',
                routerLink: '/admin/orders'
            },
            {
                name: 'Ordres',
                count: '100',
                routerLink: '/admin/orders'
            }
        ];
        this.usersList = [];
        this.ordersList = [];
        this.paymentsList = [];
        this.isLoading = false;
        this.isLoading = true;
        this.http.get('http://localhost:5100/users').subscribe((data) => {
            this.usersList = data;
            this.isLoading = false;
        });
        this.http.get('http://localhost:5100/orders').subscribe((data) => {
            this.ordersList = data;
        });
        this.http.get('http://localhost:5100/users').subscribe((data) => {
            this.paymentsList = data;
            console.log(this.paymentsList);
        });
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map