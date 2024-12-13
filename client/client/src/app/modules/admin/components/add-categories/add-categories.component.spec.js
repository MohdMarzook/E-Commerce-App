import { TestBed } from '@angular/core/testing';
import { AddCategoriesComponent } from './add-categories.component';
describe('AddCategoriesComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddCategoriesComponent]
        });
        fixture = TestBed.createComponent(AddCategoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-categories.component.spec.js.map