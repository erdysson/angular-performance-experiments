import { SimpleChanges } from '@angular/core';

export class ComponentLifecycleLogger {
    turnedOff: string[] = ['all'];

    get className(): string {
        return this.constructor.name;
    }

    init(): void {
        if (this.turnedOff.includes('all') || this.turnedOff.includes(this.className)) {
            return;
        }
        // eslint-disable-next-line no-console
        console.log(`${this.className}:onInit`);
    }

    changes(changes: SimpleChanges): void {
        if (this.turnedOff.includes('all') || this.turnedOff.includes(this.className)) {
            return;
        }

        const changedProperties = Object.keys(changes);

        if (changedProperties.length > 0) {
            for (const change of changedProperties) {
                const changeSet = changes[change];
                // eslint-disable-next-line no-console
                console.log(
                    `${this.className}:onChanges:${change}`,
                    'has changed from',
                    changeSet.previousValue,
                    'to',
                    changeSet.currentValue,
                );
            }
        } else {
            // eslint-disable-next-line no-console
            console.log(`${this.className}:onChanges`);
        }
    }

    destroy(): void {
        if (this.turnedOff.includes('all') || this.turnedOff.includes(this.className)) {
            return;
        }

        // eslint-disable-next-line no-console
        console.log(`${this.className}:onDestroy`);
    }
}
