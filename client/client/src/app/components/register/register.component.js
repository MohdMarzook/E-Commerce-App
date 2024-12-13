import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.regForm = new FormGroup({
            firstname: new FormControl(null, Validators.required),
            lastname: new FormControl(null, Validators.required),
            username: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        });
        const jwtToken = localStorage.getItem('adminJwtToken');
        if (jwtToken) {
            this.route.navigate(['/admin/dashboard']);
        }
        const token = localStorage.getItem("jwtToken");
        if (token) {
            this.route.navigate(['/home']);
        }
    }
    onSubmit(details) {
        this.http.post('http://localhost:5100/register', details).subscribe({
            next: (response) => {
                window.alert('Registered Successfully!');
                this.route.navigate(['/login']);
            },
            error: (error) => {
                window.alert(error.error);
                console.log(error);
            }
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map