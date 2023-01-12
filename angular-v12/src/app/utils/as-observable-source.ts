import { BehaviorSubject, Observable, tap } from 'rxjs';

export const asObservableSource = <T>(input: BehaviorSubject<T>, name: string): Observable<T> =>
    input.pipe(
        tap((emitted: T) => {
            // eslint-disable-next-line no-console
            console.log('source', name, 'has changed', emitted);
        }),
    );
