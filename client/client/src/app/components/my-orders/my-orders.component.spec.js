import { TestBed } from '@angular/core/testing';
import { MyOrdersComponent } from './my-orders.component';
describe('MyOrdersComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MyOrdersComponent]
        });
        fixture = TestBed.createComponent(MyOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-orders.component.spec.js.map