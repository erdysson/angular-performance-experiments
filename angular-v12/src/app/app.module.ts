import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ChangeDetectionLoggerModule } from './change-detection-logger/change-detection-logger.module';
import { NavigationModule } from './navigation/navigation.module';
import { QuoteModule } from './quote/quote.module';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        ChangeDetectionLoggerModule,
        UserModule,
        QuoteModule,
        RouterModule.forRoot(appRoutes),
        NavigationModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
