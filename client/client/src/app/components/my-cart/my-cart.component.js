import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MyCartComponent = class MyCartComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.cartList = [];
        this.isLoading = false;
        this.isLoading = true;
        const userId = localStorage.getItem('userId');
        this.http.get(`http://localhost:5100/cart/${userId}`).subscribe(data => {
            this.cartList = data;
            this.isLoading = false;
        });
        const jwtToken = localStorage.getItem('adminJwtToken');
        if (jwtToken) {
            this.route.navigate(['/admin/home']);
        }
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            window.alert("You can't Access this! because your not logedin user!");
            this.route.navigate(['/login']);
        }
    }
    onRemove(id) {
        this.isLoading = true;
        this.http.delete(`http://localhost:5100/remove-from-cart/${id}`).subscribe((res) => {
            window.alert('Item removed from cart.');
            const userId = localStorage.getItem('userId');
            this.http.get(`http://localhost:5100/cart/${userId}`).subscribe(data => {
                this.cartList = data;
                this.isLoading = false;
            });
        });
    }
};
MyCartComponent = __decorate([
    Component({
        selector: 'app-my-cart',
        templateUrl: './my-cart.component.html',
        styleUrls: ['./my-cart.component.css']
    })
], MyCartComponent);
export { MyCartComponent };
//# sourceMappingURL=my-cart.component.js.map