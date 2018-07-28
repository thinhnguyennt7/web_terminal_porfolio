import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TerminalComponent } from './terminal/terminal.component';
import { ConsoleComponent } from './console/console.component';
import { TerminalModule } from 'primeng/terminal';
// import { TerminalService } from '@node_modules/primeng/components/terminal/terminalservice';
// import { TerminalService } from 'primeng/components/terminal/terminalservice';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    TerminalModule
    // TerminalService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
