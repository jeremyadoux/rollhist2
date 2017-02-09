import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { SDKBrowserModule }  from './shared/sdk/index';
import {RpgBoardListComponent} from "./rpg-board/list/rpg-board-list.component";
import {AppRoutingModule} from "./app-routing.module";
import {ThemeHeaderCompoenent} from "./theme/header/theme-header.component";
import {DropdownModule} from "ng2-bootstrap";
import {RpgBoardDetailComponent} from "./rpg-board/detail/rpg-board-detail.component";
import {RpgPlayerFormComponent} from "./rpg-player/form/rpg-player-form.component";
import {FormsModule} from "@angular/forms";
import {RpgPlayerAttributeManagementComponent} from "./rpg-player/attribute/management/rpg-player-attribute-management.component";

@NgModule({
  imports:      [ BrowserModule, SDKBrowserModule.forRoot(), AppRoutingModule, DropdownModule.forRoot(), FormsModule ],
  declarations: [
    AppComponent,
    RpgBoardListComponent,
    ThemeHeaderCompoenent,
    RpgBoardDetailComponent,
    RpgPlayerFormComponent,
    RpgPlayerAttributeManagementComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
