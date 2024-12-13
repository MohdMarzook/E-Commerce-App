import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(route) {
        this.route = route;
        this.isAdmin = false;
        const token = localStorage.getItem('jwtToken');
        if (token) {
            this.isAdmin = false;
            localStorage.removeItem('adminJwtToken');
        }
        const jwtToken = localStorage.getItem("adminJwtToken");
        if (jwtToken) {
            localStorage.removeItem('jwtToken');
            this.isAdmin = true;
        }
    }
    ngOnInit() {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            this.isAdmin = false;
            localStorage.removeItem('adminJwtToken');
        }
        const jwtToken = localStorage.getItem("adminJwtToken");
        if (jwtToken) {
            localStorage.removeItem('jwtToken');
            this.isAdmin = true;
        }
    }
    onLogout() {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('adminJwtToken');
        window.alert("Logout Successful!");
        this.route.navigate(['/home']);
        this.isAdmin = false;
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map