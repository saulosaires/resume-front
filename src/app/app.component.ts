import {SocialAuthService} from '@abacritt/angularx-social-login';
import {Component, OnInit} from '@angular/core';
import {AuthService} from "./service/auth-service";
import {UserService} from "./service/user/user.service";
import {User} from "./model/user";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    loggedIn: boolean = false;
    title: String
    user: User = new User();

    constructor(private socialAuthService: SocialAuthService, private authService: AuthService, private userService: UserService) {
        this.title = "Resume";
    }

    ngOnInit() {
        this.socialAuthService.authState.subscribe((socialUser) => {

            if (socialUser == null) return;

            const user: User = new User();
            user.name = socialUser.name;
            user.email = socialUser.email;
            user.photoUrl = socialUser.photoUrl;

            this.userService.signIn(user).subscribe(userSignIn => {
                this.user = userSignIn;
                this.loggedIn = (userSignIn != null);
                this.authService.user.next(userSignIn);
            });

        });
    }
}
