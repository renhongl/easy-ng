import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavControlService {

  open = false;
  drawerType = 'temporary';
  headerType = 'header';

  loginDialog = false;

  toggleDrawer() {
    this.open = !this.open;
  }

  get toolbarSpacer() { return this.headerType === 'spacer'; }
  get toolbarHeader() { return this.headerType === 'header'; }

  constructor() { }


}
