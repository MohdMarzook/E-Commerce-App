import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let UpdateProductComponent = class UpdateProductComponent {
    constructor(router, http, route) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.data = [];
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
            window.alert("You can't access this!");
            this.router.navigate(['/login']);
        }
    }
    onUpdate(productDetails) {
        this.isLoading = true;
        const productId = this.route.snapshot.paramMap.get('id');
        this.http
            .put(`http://localhost:5100/products/${productId}`, productDetails)
            .subscribe((res) => {
            if (res) {
                window.alert('Product Updated Successfully!');
                this.router.navigate(['/admin/home']);
                this.http
                    .get('http://localhost:5100/products')
                    .subscribe((data) => {
                    this.data = data;
                    this.isLoading = false;
                });
            }
        });
    }
};
UpdateProductComponent = __decorate([
    Component({
        selector: 'app-update-product',
        templateUrl: './update-product.component.html',
        styleUrls: ['./update-product.component.css']
    })
], UpdateProductComponent);
export { UpdateProductComponent };
//# sourceMappingURL=update-product.component.js.map