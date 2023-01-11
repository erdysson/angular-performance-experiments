import { AfterViewChecked, Directive, ElementRef, Input, NgZone } from '@angular/core';

@Directive({
    selector: '[appChangeDetectionLogger]',
})
export class ChangeDetectionLoggerDirective implements AfterViewChecked {
    @Input()
    component!: string;

    // -1 is for first render view check, so should not count
    protected cdCycleCount = -1;

    constructor(private readonly ngZone: NgZone, private readonly host: ElementRef<HTMLElement>) {}

    ngAfterViewChecked(): void {
        this.cdCycleCount += 1;
        const message = `${this.component}: ${this.cdCycleCount}`;
        this.ngZone.runOutsideAngular(() => {
            this.host.nativeElement.textContent = message;
        });
    }
}
