import { AfterViewChecked, Directive, ElementRef, Input, NgZone } from '@angular/core';

@Directive({
    selector: '[appChangeDetectionLogger]',
})
export class ChangeDetectionLoggerDirective implements AfterViewChecked {
    @Input()
    component!: string;

    protected cdCycleCount = 0;

    constructor(private readonly ngZone: NgZone, private readonly host: ElementRef<HTMLElement>) {}

    ngAfterViewChecked(): void {
        this.cdCycleCount += 1;
        const message = `${this.component} cd cycle count: ${this.cdCycleCount}`;
        this.ngZone.runOutsideAngular(() => {
            this.host.nativeElement.textContent = message;
        });
    }
}
