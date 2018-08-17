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

import { Component, Input, Inject } from "@angular/core";
import { DialogInfo } from "../../util/dialog-info.interface";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { DialogInfoType } from "../../util/dialog-info-type.enum";

/**
 * The <code>DialogComponent</code> class represents a snackbar that provides
 * users information about current actions.
 */
@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["dialog.component.scss"]
})
export class DialogComponent {

  /**
   * Creates a new <code>DialogComponent</code> instance.
   * 
   * @param {DialogInfo} data the information to be displayed in this dialog
   *                          component.
   */
  constructor(@Inject(MAT_SNACK_BAR_DATA) protected data: DialogInfo) {}

  protected resolveIcon(): string {
    let result: string = "done";
    if (this.data) {
      switch (this.data.type) {
        case DialogInfoType.ERROR : result = "bug_report"; break;
        case DialogInfoType.INFO : result = "info"; break;
        case DialogInfoType.SUCCESS :
        default :
      }
    }
    return result;
  }

  protected resolveStyle(): string {
    let result: string = "app-dialog-success";
    if (this.data) {
      switch (this.data.type) {
        case DialogInfoType.ERROR : result = "app-dialog-error"; break;
        case DialogInfoType.INFO : result = "app-dialog-info"; break;
        case DialogInfoType.SUCCESS :
        default :
      }
    }
    return result;
  }
}
