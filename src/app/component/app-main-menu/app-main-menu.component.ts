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

/**
 * The component used to render the application main menu.
 */
@Component({
  selector: "app-main-menu",
  templateUrl: "./app-main-menu.component.html"
})
export class AppMainMenuComponent implements OnInit {

  /**
   * The model used ro render the application main menu.
   */
  protected appMenuModel: any[];

  /**
   * Creates a new <code>AppMainMenuComponent</code> instance.
   */
  constructor() {}

  /**
   * @inheritDoc
   */
  public ngOnInit(): void {
    this.appMenuModel = [
      {
        label: "Configuration",
        icon: "settings",
        children: [
          {
            label: "Global Information",
            icon: "info",
            routerLink: ["/configuration/info"]
          },
          {
            label: "Loggers",
            icon: "view_list",
            routerLink: ["/configuration/loggers"]
          },
          {
            label: "HTTP Tasks",
            icon: "settings_input_component",
            routerLink: ["/configuration/httptasks"]
          },
          {
            label: "Security",
            icon: "security",
            routerLink: ["/configuration/security"]
          },
          {
            label: "Modules",
            icon: "developer_board",
            routerLink: ["/configuration/modules"]
          }
        ]
      },
      {
        label: "Domains",
        icon: "device_hub",
        routerLink: ["/domains"]
      },
      {
        label: "Administration",
        icon: "dashboard"
      },
      {
        label: "System",
        icon: "build",
        children: [
          {
            label: "Config",
            icon: "settings_applications",
            routerLink: ["/system/config"]
          },
          {
            label: "Environment",
            icon: "devices",
            routerLink: ["/system/environment"]
          },
          {
            label: "Processes",
            icon: "memory",
            routerLink: ["/system/processes"]
          },
          {
            label: "Disks",
            icon: "storage"
          }
        ]
      },
      {
        label: "Terminal",
        icon: "code",
        routerLink: ["/terminal"]
      }
    ];
  }
}
