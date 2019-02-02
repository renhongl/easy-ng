import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  open = false;
  drawerType = 'temporary';
  headerType = 'header';

  toggleDrawer() {
    this.open = !this.open;
  }

  get toolbarSpacer() { return this.headerType === 'spacer'; }
  get toolbarHeader() { return this.headerType === 'header'; }

  constructor() { }
}
