import { TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
describe('SidebarComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent]
        });
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidebar.component.spec.js.map