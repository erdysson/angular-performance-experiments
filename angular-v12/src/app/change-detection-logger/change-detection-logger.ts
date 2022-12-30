export abstract class ChangeDetectionLogger {
    abstract name: string;

    abstract parent: string | null;

    protected readonly changeDetectionCounterKey: symbol = Symbol('change_detection_logger');

    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any)[this.changeDetectionCounterKey] = 0;
    }

    get log(): string {
        // eslint-disable-next-line no-console
        console.log(`[${this.name}]-[${this.parent}]: ${this.increaseAndGetCount()}`);

        return '';
    }

    protected increaseAndGetCount(): number {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return ((window as any)[this.changeDetectionCounterKey] += 1);
    }
}
