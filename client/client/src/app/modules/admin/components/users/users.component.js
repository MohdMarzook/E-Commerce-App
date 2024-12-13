import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UsersComponent = class UsersComponent {
    constructor(http) {
        this.http = http;
        this.users = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.fetchUsers();
    }
    fetchUsers() {
        this.isLoading = true;
        this.http.get('http://localhost:5100/users').subscribe(users => {
            this.users = users;
            this.isLoading = false;
        }, error => {
            console.error(error);
        });
    }
};
UsersComponent = __decorate([
    Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']
    })
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=users.component.js.map