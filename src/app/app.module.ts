import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
