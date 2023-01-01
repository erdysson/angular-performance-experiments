import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { QuoteModule } from './quote/quote.module';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, UserModule, QuoteModule, RouterModule.forRoot(appRoutes)],
    bootstrap: [AppComponent],
})
export class AppModule {}
