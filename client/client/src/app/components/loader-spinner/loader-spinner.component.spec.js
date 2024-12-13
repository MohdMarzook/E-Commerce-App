import { TestBed } from '@angular/core/testing';
import { LoaderSpinnerComponent } from './loader-spinner.component';
describe('LoaderSpinnerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderSpinnerComponent]
        });
        fixture = TestBed.createComponent(LoaderSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=loader-spinner.component.spec.js.map