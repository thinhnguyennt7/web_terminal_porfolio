import { Component, HostListener } from '@angular/core';

// Keycode
export enum KEY_CODE {
  BACK_QUOTE = 96
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    openTerminal: boolean = false;

    constructor() {}
  
    @HostListener('window:keypress', ['$event'])

    keyEvent(event: KeyboardEvent) {
      
      if (event.keyCode === KEY_CODE.BACK_QUOTE) {
        if (this.openTerminal) {
          this.openTerminal = false;
        } else {
          this.openTerminal = true;
        }
      }
    }
}
