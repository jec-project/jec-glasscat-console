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

import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";
import { BreadcrumbService } from "../../service/breadcrumb.service";

/**
 * The component used to render the application home page.
 */
@Component({
  selector: "app-welcome",
  templateUrl: "./app-welcome.component.html",
  styleUrls: ["./app-welcome.component.scss"]
})
export class AppWelcomeComponent implements OnInit {

  /**
   * Creates a new <code>AppWelcomeComponent</code> instance.
   */
  constructor(  private _iconRegistry: MatIconRegistry,
                private _sanitizer: DomSanitizer,
                private _breadcrumbService: BreadcrumbService ) {
    this._iconRegistry.addSvgIcon(
      "github",
      this._sanitizer.bypassSecurityTrustResourceUrl("./assets/svg-icons/github.svg")
    );
    this._iconRegistry.addSvgIcon(
      "jec",
      this._sanitizer.bypassSecurityTrustResourceUrl("./assets/svg-icons/jec.svg")
    );
    this._iconRegistry.addSvgIcon(
      "twitter",
      this._sanitizer.bypassSecurityTrustResourceUrl("./assets/svg-icons/twitter.svg")
    );
  }
  
  /**
   * @override
   */
  public ngOnInit():void {
    this.initBreadcrumb();
  }
  
  private initBreadcrumb():void {
    this._breadcrumbService.push(null);
  }

}
