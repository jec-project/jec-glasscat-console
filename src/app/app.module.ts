//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule, } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";

import { AppComponent } from "./main/app.component";
import { AppMainMenuComponent } from "./component/app-main-menu/app-main-menu.component";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BreadcrumbService } from "./service/breadcrumb.service";
import { AppBreadcrumbComponent } from "./component/app-breadcrumb/app-breadcrumb.component";
import { ContextService } from "./service/context.service";

@NgModule({
  declarations: [
    AppComponent,
    AppMainMenuComponent,
    AppBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,

    AppRoutingModule,
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BreadcrumbService,
    ContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
