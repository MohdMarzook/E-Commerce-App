import { TestBed } from '@angular/core/testing';
import { PlaceOrderComponent } from './place-order.component';
describe('PlaceOrderComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PlaceOrderComponent]
        });
        fixture = TestBed.createComponent(PlaceOrderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=place-order.component.spec.js.map