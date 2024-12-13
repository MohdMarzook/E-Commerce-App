import { TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
describe('LandingPageComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LandingPageComponent]
        });
        fixture = TestBed.createComponent(LandingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=landing-page.component.spec.js.map