import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  anyVar: string;
  anyObj: any;

  /**
   * Having this.anyVar istead of let variable, is horrendous, but it only fails in the uglify part of the
   * ng build --prod process with a "Cannot set property 'fixed' of undefined" error
   */
  uglifyFail() {
    for (this.anyVar in this.anyObj) {
    }
  }
}
