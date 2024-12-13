import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.data = [];
        this.isUpdate = false;
        this.isLoading = false;
        this.isLoading = true;
        this.searchText = '';
        this.http.get('http://localhost:5100/products').subscribe(data => {
            this.data = data;
            this.isLoading = false;
        });
        const jwtToken = localStorage.getItem('adminJwtToken');
        if (!jwtToken) {
            window.alert("You can't Access this!");
            this.route.navigate(['/login']);
        }
    }
    filterData() {
        if (this.searchText) {
            return this.data.filter((product) => product.productname.toLowerCase().includes(this.searchText.toLowerCase()));
        }
        else {
            return this.data;
        }
    }
    onDelete(productId) {
        // this.isLoading = true;
        this.http.delete(`http://localhost:5100/products/${productId}`).subscribe((res) => {
            if (res) {
                window.alert("Product Deleted Successfully!");
                this.http.get('http://localhost:5100/products').subscribe(data => {
                    this.data = data;
                    // this.isLoading = false;
                });
            }
        });
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