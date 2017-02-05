import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { SDKBrowserModule }  from './shared/sdk/index';

@NgModule({
  imports:      [ BrowserModule, SDKBrowserModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
