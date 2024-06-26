import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { RouteConfigLoadEnd } from '@angular/router';
const bootstrap = () => bootstrapApplication(AppComponent);

export default bootstrap;
