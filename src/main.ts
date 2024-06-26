/// <reference types="@angular/localize" />

import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    RouterModule
  ],
})
  .catch((err) => console.error(err));
