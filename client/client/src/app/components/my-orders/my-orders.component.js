import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MyOrdersComponent = class MyOrdersComponent {
    constructor(http) {
        this.http = http;
        this.myOrdersList = [];
        this.isLoading = false;
        this.isLoading = true;
        const userId = localStorage.getItem('userId');
        this.http.get(`http://localhost:5100/my-orders/${userId}`).subscribe((res) => {
            if (res.status !== 404) {
                this.myOrdersList = res;
                this.isLoading = false;
            }
            else {
                this.myOrdersList = [];
                this.isLoading = false;
            }
        });
    }
    onCancelOrder(id) {
        this.http.put(`http://localhost:5100/cancel-order/${id}`, { status: 'Canceled' }).subscribe((res) => {
            console.log(res);
            alert('Order Canceled Successfully!..');
        });
        const userId = localStorage.getItem('userId');
        this.http.get(`http://localhost:5100/my-orders/${userId}`).subscribe((res) => {
            if (res.status !== 404) {
                this.myOrdersList = res;
                this.isLoading = false;
            }
            else {
                this.myOrdersList = [];
                this.isLoading = false;
            }
        });
    }
};
MyOrdersComponent = __decorate([
    Component({
        selector: 'app-my-orders',
        templateUrl: './my-orders.component.html',
        styleUrls: ['./my-orders.component.css']
    })
], MyOrdersComponent);
export { MyOrdersComponent };
//# sourceMappingURL=my-orders.component.js.map