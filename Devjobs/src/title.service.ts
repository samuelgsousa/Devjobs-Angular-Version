// title.service.ts

import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private titleService: Title) {}

  setTitle(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    let title = 'Default Title'; // Título padrão

    // Aqui você pode definir lógicas para definir o título com base nas informações da rota
    if (routeSnapshot.data && routeSnapshot.data['title']) {
      title = routeSnapshot.data['title'];
    }

    this.titleService.setTitle(title);
  }
}
