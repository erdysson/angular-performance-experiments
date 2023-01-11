import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangeDetectionLoggerModule } from './change-detection-logger/change-detection-logger.module';
import { NavigationModule } from './navigation/navigation.module';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [BrowserModule, HttpClientModule, ChangeDetectionLoggerModule, UserModule, NavigationModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
