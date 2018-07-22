import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { RouteItem } from "./route-item.interface";
import { BreadcrumbService } from "../../service/breadcrumb.service";

/**
 * The <code>AppBreadcrumbComponent</code> class represents a breadcrumb
 * that helps users to navigate into the console.
 */
@Component({
  selector: "app-breadcrumb",
  templateUrl: "./app-breadcrumb.component.html",
  styleUrls: ["app-breadcrumb.component.scss"]
})
export class AppBreadcrumbComponent implements OnInit {

  /**
   * The list of routes displayed in the breadcrumb.
   */
  protected routeList: RouteItem[] = null;

  /**
   * An event emitter that dipatches events when the user clicks on
   * an item.
   */
  @Output() public onChange: EventEmitter<RouteItem> =
                                                  new EventEmitter<RouteItem>();

  /**
   * The reference to the item that represents the the route to the console home
   * page.
   */
  private readonly HOME_ITEM: RouteItem = {
    label: "Home",
    link: "/"
  };

  /**
   * Creates a new <code>AppBreadcrumbComponent</code> instance.
   * 
   * @param {BreadcrumbService} _breadcrumbService the reference to the service 
   *                                               that manages the app
   *                                               breadcrumb.
   */
  constructor(private _breadcrumbService: BreadcrumbService) {}

  /**
   * @inheritDoc
   */
  public ngOnInit():void {
    this.routeList = new Array<RouteItem>();
    this._breadcrumbService.emitter.subscribe((routeList: RouteItem[])=> {
      routeList ? 
        this.routeList.splice(0, this.routeList.length, ...routeList) :
        this.routeList.splice(0);
    });
  }

  /**
   * An event handler that listens user's clicks over the component items.
   * 
   * @param {RouteItem} routeItem the route item selected by the user.
   */
  protected anchorClickHandler(routeItem: RouteItem): void {
    this.onChange.emit(routeItem ? routeItem : this.HOME_ITEM);
  }
}
