import { Routes } from '@angular/router';

import { QuoteComponent } from './quote/quote.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
    {
        path: 'users',
        component: UserComponent,
        data: {
            name: 'Users',
        },
    },
    {
        path: 'quotes',
        component: QuoteComponent,
        data: {
            name: 'Quotes',
        },
    },
];
