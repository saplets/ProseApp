import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        return true;

        // TODO: Eventually we'll check for the session, but not now
        // if (localStorage.getItem('isLoggedin')) {
        //     return true;
        // }

        // this.router.navigate(['/login']);
        // return false;
    }
}
