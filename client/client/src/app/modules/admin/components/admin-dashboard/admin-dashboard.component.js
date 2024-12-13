import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminDashboardComponent = class AdminDashboardComponent {
    constructor() {
        this.isSidebarHidden = false;
    }
    toggleSidebar() {
        this.isSidebarHidden = !this.isSidebarHidden;
    }
};
AdminDashboardComponent = __decorate([
    Component({
        selector: 'app-admin-dashboard',
        templateUrl: './admin-dashboard.component.html',
        styleUrls: ['./admin-dashboard.component.css']
    })
], AdminDashboardComponent);
export { AdminDashboardComponent };
//# sourceMappingURL=admin-dashboard.component.js.map