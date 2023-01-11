import { Observable, tap } from 'rxjs';

export const asObservableSource = <T>(input: Observable<T>, name: string): Observable<T> =>
    input.pipe(
        tap((emitted: T) => {
            // eslint-disable-next-line no-console
            console.log('source', name, 'has changed', emitted);
        }),
    );
