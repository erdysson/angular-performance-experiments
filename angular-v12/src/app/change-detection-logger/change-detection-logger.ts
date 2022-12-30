import { AfterViewInit, Directive } from '@angular/core';

@Directive()
export abstract class ChangeDetectionLogger implements AfterViewInit {
    abstract name: string;

    abstract parent: string | null;

    protected readonly changeDetectionCounterKey = Symbol('change_detection_logger');

    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any)[this.changeDetectionCounterKey] = 0;
    }

    get log(): string {
        // eslint-disable-next-line no-console
        console.log(`${this.logHeader}: ${this.increaseAndGetCount()}`);

        return '';
    }

    protected get logHeader(): string {
        return `[${this.name}]-[${this.parent}]`;
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log(`${this.logHeader}: afterViewInit - setTimeout() resolved`);
        }, 2000);
    }

    onClickHandler(event: MouseEvent): void {
        // eslint-disable-next-line no-console
        console.log(`${this.logHeader} - click handler executed`);
    }

    protected increaseAndGetCount(): number {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ((window as any)[this.changeDetectionCounterKey] += 1);
    }
}
