import { TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
describe('ProductDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductDetailsComponent]
        });
        fixture = TestBed.createComponent(ProductDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=product-details.component.spec.js.map