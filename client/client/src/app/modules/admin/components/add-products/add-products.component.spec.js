import { TestBed } from '@angular/core/testing';
import { AddProductsComponent } from './add-products.component';
describe('AddProductsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddProductsComponent]
        });
        fixture = TestBed.createComponent(AddProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-products.component.spec.js.map