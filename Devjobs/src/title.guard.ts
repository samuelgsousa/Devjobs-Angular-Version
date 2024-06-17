// title.guard.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { TitleService } from './title.service';

@Injectable({
  providedIn: 'root'
})
export class TitleGuard implements CanActivate {

  constructor(private titleService: TitleService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.titleService.setTitle(route, state);
    return true;
  }
}
