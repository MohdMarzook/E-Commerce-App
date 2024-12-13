import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.isLoading = false;
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            window.alert("You can't Access this! because your not an loggedin user!");
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
        this.isLoading = true;
        this.route.paramMap.subscribe(params => {
            const productId = params.get('id');
            this.http.get(`http://localhost:5100/products/${productId}`).subscribe(product => {
                this.product = product;
                this.isLoading = false;
            });
        });
    }
    onAddToCart(productId) {
        console.log(productId);
        this.http.post('http://localhost:5100/add-to-cart', { productId }).subscribe((response) => {
            console.log(response);
            window.alert('Product added to cart!');
        }, (error) => {
            console.error(error);
            window.alert('Error occurred while adding the product to cart!');
        });
    }
};
ProductDetailsComponent = __decorate([
    Component({
        selector: 'app-product-details',
        templateUrl: './product-details.component.html',
        styleUrls: ['./product-details.component.css']
    })
], ProductDetailsComponent);
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map