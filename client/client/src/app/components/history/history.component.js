import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HistoryComponent = class HistoryComponent {
    constructor(http) {
        this.http = http;
        this.myOrdersList = [];
        this.isLoading = false;
        this.isLoading = true;
        const userId = localStorage.getItem('userId');
        this.http.get(`http://localhost:5100/my-orders/${userId}`).subscribe((res) => {
            this.myOrdersList = res;
            this.isLoading = false;
            console.log(res);
        });
    }
};
HistoryComponent = __decorate([
    Component({
        selector: 'app-history',
        templateUrl: './history.component.html',
        styleUrls: ['./history.component.css']
    })
], HistoryComponent);
export { HistoryComponent };
//# sourceMappingURL=history.component.js.map