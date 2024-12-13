import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddProductsComponent = class AddProductsComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.isLoading = false;
        this.regForm = new FormGroup({
            productname: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            price: new FormControl(null, Validators.required),
            brand: new FormControl(null, Validators.required),
            image: new FormControl(null, Validators.required),
            quantity: new FormControl(null, Validators.required),
            category: new FormControl(null, Validators.required),
            countInStock: new FormControl(null, Validators.required),
            rating: new FormControl(null, Validators.required),
        });
        const jwtToken = localStorage.getItem('adminJwtToken');
        if (!jwtToken) {
            window.alert("You can't Access this!");
            this.route.navigate(['/login']);
        }
    }
    onSubmit(details = { productname: String, description: String, price: String, brand: String, image: String, category: String, countInStock: String, rating: String }) {
        this.isLoading = true;
        this.http.post('http://localhost:5100/add-products', details).subscribe((response) => {
            window.alert("Product Added Successfully!");
            this.regForm.reset();
            this.isLoading = false;
        });
    }
};
AddProductsComponent = __decorate([
    Component({
        selector: 'app-add-products',
        templateUrl: './add-products.component.html',
        styleUrls: ['./add-products.component.css']
    })
], AddProductsComponent);
export { AddProductsComponent };
//# sourceMappingURL=add-products.component.js.map