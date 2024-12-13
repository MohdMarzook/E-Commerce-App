import { TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
describe('FeedbackComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FeedbackComponent]
        });
        fixture = TestBed.createComponent(FeedbackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=feedback.component.spec.js.map