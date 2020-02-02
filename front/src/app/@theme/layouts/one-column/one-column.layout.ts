import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar (mouseenter)="extendSidebar()" class="menu-sidebar" state="compacted" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>


      <nb-layout-column [class.margin-not-mobile]="!isMobile()">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer [class.margin-not-mobile]="!isMobile()">
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
    <div class="menu-click-out" [class.hidden]="!isSidebarExtended" (mouseenter)="closeSidebar()">test</div>
  `,
})
export class OneColumnLayoutComponent implements OnInit {
  public isSidebarExtended: boolean = false;

  constructor(
    private sidebarService: NbSidebarService,
    private deviceDetectorService: DeviceDetectorService
  ) { }

  ngOnInit(){
    this.sidebarService.onToggle().subscribe(() => this.isSidebarExtended = !this.isSidebarExtended)
  }



  public isMobile(): boolean {
    return this.deviceDetectorService.isMobile();
  }

  public closeSidebar(): void {
    if (this.isMobile()) {
      this.sidebarService.collapse('menu-sidebar')
    } else {
      this.sidebarService.compact('menu-sidebar')
    }
    this.isSidebarExtended = false;
  }
  public extendSidebar(): void {
    this.sidebarService.expand('menu-sidebar')
    this.isSidebarExtended = true;
  }

}
