import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let FeedbackComponent = class FeedbackComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.regForm = new FormGroup({
            user: new FormControl(null, Validators.required),
            message: new FormControl(null, Validators.required)
        });
        const jwtToken = localStorage.getItem('adminJwtToken');
        if (jwtToken) {
            this.route.navigate(['/admin/home']);
        }
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            window.alert("You can't Access this! because your not an Admin!");
            this.route.navigate(['/login']);
        }
    }
    onSubmit(details) {
        this.http.post('http://localhost:5100/feedback', details).subscribe((response) => {
            window.alert('Feedback Submitted Successfully!');
            this.route.navigate(['/home']);
        }, error => {
            window.alert('Feedback Failed!');
            console.log(error);
        });
    }
};
FeedbackComponent = __decorate([
    Component({
        selector: 'app-feedback',
        templateUrl: './feedback.component.html',
        styleUrls: ['./feedback.component.css']
    })
], FeedbackComponent);
export { FeedbackComponent };
// # sourceMappingURL=feedback.component.js.map