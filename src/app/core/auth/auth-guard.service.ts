import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, NavigationExtras, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { ConfigService } from './../services/config/config.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router,
        private configService: ConfigService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {

        if (! environment.production) {
            return true;
        }

        if (this.authService.loggedIn()) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate([`/${this.configService.appPrefix}/login`]);
        return false;
    }
}
