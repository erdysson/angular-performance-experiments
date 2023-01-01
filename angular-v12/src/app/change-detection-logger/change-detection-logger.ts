import { Directive } from '@angular/core';

@Directive()
export abstract class ChangeDetectionLogger {
    abstract name: string;

    abstract pathFromParent: string | null;

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

    protected increaseAndGetCount(): number {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ((window as any)[this.changeDetectionCounterKey] += 1);
    }
}
