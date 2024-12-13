import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    onShop() {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/shopping']);
        }
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map