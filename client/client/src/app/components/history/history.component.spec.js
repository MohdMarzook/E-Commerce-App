import { TestBed } from '@angular/core/testing';
import { HistoryComponent } from './history.component';
describe('HistoryComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HistoryComponent]
        });
        fixture = TestBed.createComponent(HistoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=history.component.spec.js.map