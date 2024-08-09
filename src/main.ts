import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app/app.module';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


  //si fuera que usamo ngModule quitamos lo de arriba y descomentamos aaca
  //platformBrowserDynamic().bootstrapModule(AppModule);