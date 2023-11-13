import {Component, OnInit} from '@angular/core';
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {AuthService} from "../service/auth-service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-profile-menu',
    templateUrl: './profile-menu.component.html',
    styleUrls: ['./profile-menu.component.scss']
})
export class ProfileMenuComponent implements OnInit {

    user: SocialUser;

    constructor(private router: Router, private socialAuthService: SocialAuthService, private authService: AuthService) {

        this.authService.user.subscribe({
            next: newValue => {
                this.user = newValue;
            }
        });

    }

    ngOnInit() {
    }

    dashboard() {
        this.router.navigate(['/dashboard']);
    }

    profile(): void {
        this.router.navigate(['/profile']);
    }

    signOut(): void {
        this.socialAuthService.signOut();
    }


}
