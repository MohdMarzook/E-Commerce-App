import { TestBed } from '@angular/core/testing';
import { MyCartComponent } from './my-cart.component';
describe('MyCartComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MyCartComponent]
        });
        fixture = TestBed.createComponent(MyCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=my-cart.component.spec.js.map