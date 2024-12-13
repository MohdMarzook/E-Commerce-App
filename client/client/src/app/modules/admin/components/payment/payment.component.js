import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
let PaymentComponent = class PaymentComponent {
    constructor(http) {
        this.http = http;
        this.data = [];
        this.isUpdate = false;
        this.isManage = false;
        this.paymentId = '';
        this.http.get('http://localhost:5100/payments').subscribe((response) => {
            this.data = response;
        });
        this.statusForm = new FormGroup({
            status: new FormControl('pending'),
            amount: new FormControl(null, Validators.required)
        });
    }
    onChangeStatus(id) {
        this.paymentId = id;
        this.isUpdate = true;
    }
    onSubmit(paymentDetails = { status: String, amount: String }) {
        this.http.put(`http://localhost:5100/payment/${this.paymentId}`, paymentDetails).subscribe((res) => {
            window.alert('Payment Status Updated!');
            this.isUpdate = false;
            this.http.get('http://localhost:5100/payments').subscribe((response) => {
                this.data = response;
            });
        }, (error) => {
            console.error(error);
            window.alert('Failed to update Payment status');
        });
    }
};
PaymentComponent = __decorate([
    Component({
        selector: 'app-payment',
        templateUrl: './payment.component.html',
        styleUrls: ['./payment.component.css']
    })
], PaymentComponent);
export { PaymentComponent };
//# sourceMappingURL=payment.component.js.map