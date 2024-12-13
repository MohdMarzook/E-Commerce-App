import { TestBed } from '@angular/core/testing';
import { UpdateProductComponent } from './update-product.component';
describe('UpdateProductComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UpdateProductComponent]
        });
        fixture = TestBed.createComponent(UpdateProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-product.component.spec.js.map