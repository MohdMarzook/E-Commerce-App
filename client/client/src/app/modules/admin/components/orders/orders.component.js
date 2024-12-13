import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
let OrdersComponent = class OrdersComponent {
    constructor(http, route, modalService) {
        // Email Message to Customer //
        this.http = http;
        this.route = route;
        this.modalService = modalService;
        this.data = [];
        this.isLoading = false;
        this.orderId = '';
        this.isUpdate = false;
        // Email Message to Customer //
        this.isLoading = true;
        this.http.get('http://localhost:5100/orders').subscribe(data => {
            this.data = data;
            this.isLoading = false;
        });
        const jwtToken = localStorage.getItem('adminJwtToken');
        if (!jwtToken) {
            window.alert("You can't Access this!");
            this.route.navigate(['/login']);
        }
        this.statusForm = new FormGroup({
            status: new FormControl('pending')
        });
    }
    onChangeStatus(id) {
        this.orderId = id;
        this.isUpdate = true;
    }
    onSubmit(status) {
        this.http.put(`http://localhost:5100/orders/${this.orderId}`, status).subscribe((res) => {
            window.alert('Order Status Updated!');
            this.isUpdate = false;
            this.http.get('http://localhost:5100/orders').subscribe(data => {
                this.data = data;
                this.isLoading = false;
            });
        });
    }
};
OrdersComponent = __decorate([
    Component({
        selector: 'app-orders',
        templateUrl: './orders.component.html',
        styleUrls: ['./orders.component.css']
    })
], OrdersComponent);
export { OrdersComponent };
//# sourceMappingURL=orders.component.js.map