import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let LandingPageComponent = class LandingPageComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.categories = [];
        this.data = [];
        this.searchInput = '';
        this.product = {};
        this.isLoading = false;
        this.selectedCategories = {};
        this.electronicsSelected = '';
        this.clothesSelected = '';
        this.gadgetsSelected = false;
        this.isLoading = true;
        this.itemId = '';
        this.product = {};
        this.regForm = new FormGroup({
            user: new FormControl(null, Validators.required),
            phone: new FormControl(null, Validators.required),
            quantity: new FormControl(null, Validators.required),
            address: new FormControl(null, Validators.required),
            paymentMethod: new FormControl(null, Validators.required)
        });
        this.searchInput = '';
        this.http.get('http://localhost:5100/products').subscribe(data => {
            this.data = data;
            this.isLoading = false;
        });
        this.fetchCategories();
        const jwtToken = localStorage.getItem('adminJwtToken');
        if (jwtToken) {
            window.alert("You can't Access this!");
            this.route.navigate(['/admin/home']);
        }
    }
    ngOnInit() {
        this.categories.forEach(category => {
            this.selectedCategories[category.category] = false;
        });
    }
    fetchCategories() {
        this.isLoading = true;
        this.http.get('http://localhost:5100/getAllCatogory').subscribe(categories => {
            this.categories = categories;
            this.isLoading = false;
        }, error => {
            console.error(error);
            this.isLoading = false;
        });
    }
    filterItems() {
        return this.data.filter(product => {
            const searchMatch = !this.searchInput ||
                product.productname.toLowerCase().includes(this.searchInput.toLowerCase());
            const categoryMatch = Object.keys(this.selectedCategories).every(category => {
                return !this.selectedCategories[category] || product.category === category;
            });
            return searchMatch && categoryMatch;
        });
    }
    onAddToCart(productId) {
        const token = localStorage.getItem("jwtToken");
        const jwtToken = localStorage.getItem('adminJwtToken');
        const userId = localStorage.getItem('userId');
        if (jwtToken) {
            this.route.navigate(['/admin/home']);
        }
        if (!token) {
            window.alert("You can't Access this! because your not an loggedin user!");
            this.route.navigate(['/login']);
        }
        else {
            this.http.post('http://localhost:5100/add-to-cart', { userId, productId }).subscribe((response) => {
                window.alert('Product added to cart!');
            }, (error) => {
                console.error(error);
                window.alert('Error occurred while adding the product to cart!');
            });
        }
    }
    onBuyNow(orderDetails = { user: String, phone: String, productId: this.itemId, address1: String, address2: String }) {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            this.route.navigate(['/login']);
        }
        else {
            const order = {
                user: orderDetails.user,
                phone: orderDetails.phone,
                productId: this.itemId,
                address1: orderDetails.address1,
                address2: orderDetails.address2
            };
            this.http.post(`http://localhost:5100/order`, order).subscribe((res) => {
                if (res) {
                    window.alert("Product Placed Successfully!");
                    this.http.get('http://localhost:5100/products').subscribe(data => {
                        this.data = data;
                    });
                }
            });
        }
    }
};
LandingPageComponent = __decorate([
    Component({
        selector: 'app-landing-page',
        templateUrl: './landing-page.component.html',
        styleUrls: ['./landing-page.component.css']
    })
], LandingPageComponent);
export { LandingPageComponent };
//# sourceMappingURL=landing-page.component.js.map