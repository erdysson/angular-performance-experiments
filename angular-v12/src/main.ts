import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    // .bootstrapModule(AppModule, { ngZoneRunCoalescing: true, ngZoneEventCoalescing: true })
    .bootstrapModule(AppModule)
    .then((module) => {
        const appRef = module.injector.get(ApplicationRef);
        const appComponent = appRef.components[0];
        enableDebugTools(appComponent);
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
