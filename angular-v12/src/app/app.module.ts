import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SiblingOneModule } from './main/sibling-one/sibling-one.module';
import { SiblingTwoModule } from './main/sibling-two/sibling-two.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, SiblingOneModule, SiblingTwoModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
