import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TerminalComponent } from './terminal/terminal.component';
import { ConsoleComponent } from './console/console.component';
import { TerminalModule } from 'primeng/terminal';
// import { NgImageAsParticlesModule } from 'ng-image-as-particles';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    TerminalModule,
    // NgImageAsParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
