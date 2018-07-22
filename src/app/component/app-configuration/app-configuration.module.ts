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

import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconRegistry } from "@angular/material";

// Modules imports:
import { SharedModule } from "../../shared/shared.module";

// Components imports:
import { ApServerConfigComponent } from "./views/app-server-config.component";

/**
 * The module associated with the "configuration" route.
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        redirectTo: "info", 
        pathMatch: "full"
      },
      {
        path: "info",
        component: ApServerConfigComponent
      }
    ]),
    SharedModule
  ],
  providers: [
    MatIconRegistry
  ],
  declarations: [
    ApServerConfigComponent
  ]
})
export class AppConfigurationModule {}