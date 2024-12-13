import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddCategoriesComponent = class AddCategoriesComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.categories = [];
        this.isLoading = false;
        this.regForm = new FormGroup({
            category: new FormControl(null, Validators.required),
        });
        const jwtToken = localStorage.getItem('adminJwtToken');
        if (!jwtToken) {
            window.alert("You can't Access this!");
            this.route.navigate(['/login']);
        }
    }
    ngOnInit() {
        this.fetchCategories();
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
    onSubmit(details = { category: String }) {
        this.isLoading = true;
        this.http.post('http://localhost:5100/add-category', details).subscribe((response) => {
            window.alert("Category Added Successfully!");
            this.regForm.reset();
            this.isLoading = false;
            this.fetchCategories();
        });
    }
};
AddCategoriesComponent = __decorate([
    Component({
        selector: 'app-add-categories',
        templateUrl: './add-categories.component.html',
        styleUrls: ['./add-categories.component.css']
    })
], AddCategoriesComponent);
export { AddCategoriesComponent };
//# sourceMappingURL=add-categories.component.js.map