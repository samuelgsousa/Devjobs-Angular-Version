import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: RouterModule, useFactory: () => RouterModule.forRoot(AppRoutingModule.routes).ngModule }
  ]
};

export const config = mergeApplicationConfig(serverConfig);
