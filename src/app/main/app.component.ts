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

import { ChangeDetectorRef, Component, OnInit, OnDestroy } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";
import { RouteItem } from "../component/app-breadcrumb/route-item.interface";
import { Router } from "@angular/router";

export class FileNode {
  children: FileNode[];
  label: string;
  icon: string;
  routerLink: string;
}

@Component({
  selector: "app-main",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {

  protected mobileQuery: MediaQueryList;

  protected appMenuModel: any[];

  private _mobileQueryListener: () => void;

  constructor(  changeDetectorRef: ChangeDetectorRef,
                media: MediaMatcher,
                private _router: Router
              ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  /**
   * @inheritDoc
   */
  ngOnInit() {
    this.appMenuModel = [
      {
        label: "Welcome",
        icon: "fa fa-paw",
        routerLink: ["/welcome"]
      },
      {
        label: "Configuration",
        icon: "fa fa-gear",
        children: [
          {
            label: "Global Information",
            icon: "fa fa-info-circle",
            routerLink: ["/configuration/info"]
          },
          {
            label: "Loggers",
            icon: "fa fa-file-code-o",
            routerLink: ["/configuration/loggers"]
          },
          {
            label: "HTTP Tasks",
            icon: "fa fa-plug",
            routerLink: ["/configuration/httptasks"]
          },
          {
            label: "Security",
            icon: "fa fa-shield",
            routerLink: ["/configuration/security"]
          },
          {
            label: "Modules",
            icon: "fa fa-cubes",
            routerLink: ["/configuration/modules"]
          }
        ]
      },
      {
        label: "Domains",
        icon: "fa fa-sitemap",
        routerLink: ["/domains"]
      },
      {
        label: "Administration",
        icon: "fa fa-list-alt"
      },
      {
        label: "System",
        icon: "fa fa-wrench",
        children: [
          {
            label: "Config",
            icon: "fa fa-tasks",
            routerLink: ["/system/config"]
          },
          {
            label: "Environment",
            icon: "fa fa-desktop",
            routerLink: ["/system/environment"]
          },
          {
            label: "Processes",
            icon: "fa fa-rotate-left",
            routerLink: ["/system/processes"]
          },
          {
            label: "Disks",
            icon: "fa fa-hdd-o"
          }
        ]
      },
      {
        label: "Terminal",
        icon: "fa fa-terminal",
        routerLink: ["/terminal"]
      }
    ];
  }

  /**
   * @inheritDoc
   */
  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  /**
   * 
   * @param route 
   */
  protected breadcrumbChangeHandler(route: RouteItem): void {
    this._router.navigate([route.link]);
  }
}
