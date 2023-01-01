import { AfterViewInit, Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive()
export abstract class ChangeDetectionLogger implements AfterViewInit {
    abstract name: string;

    abstract pathFromParent: string | null;

    ts$ = new BehaviorSubject(Date.now());

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
        const pathFromParent = this.pathFromParent ? `${this.pathFromParent}-` : '';

        return `${pathFromParent}[${this.name}]`;
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log(`${this.logHeader}: afterViewInit - setTimeout() resolved`);
        }, 100);
    }

    onClickHandler(event: MouseEvent): void {
        // eslint-disable-next-line no-console
        console.log(`${this.logHeader} - click handler executed`);

        for (let i = 0; i < 100; i++) {
            //
        }

        setTimeout(() => this.ts$.next(Date.now()), 100);
    }

    protected increaseAndGetCount(): number {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ((window as any)[this.changeDetectionCounterKey] += 1);
    }
}
