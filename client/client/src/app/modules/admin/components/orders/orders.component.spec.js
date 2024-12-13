import { TestBed } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
describe('OrdersComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [OrdersComponent]
        });
        fixture = TestBed.createComponent(OrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=orders.component.spec.js.map