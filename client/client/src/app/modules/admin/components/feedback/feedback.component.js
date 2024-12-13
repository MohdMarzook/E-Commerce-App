import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FeedbackComponent = class FeedbackComponent {
    constructor(http) {
        this.http = http;
        this.data = [];
        this.isLoading = false;
        this.isLoading = true;
        this.http.get('http://localhost:5100/feedback').subscribe(data => {
            this.data = data;
            this.isLoading = false;
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
//# sourceMappingURL=feedback.component.js.map