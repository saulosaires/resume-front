import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {AuthService} from "../service/auth-service";
import {CountryService} from "../service/country/country.service";
import {Country} from "../model/country";
import {UserService} from "../service/user/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    user: User;
    country: Country;
    countries: Country[] = [];

    constructor(private _snackBar: MatSnackBar,
                private countryService: CountryService,
                private userService: UserService,
                private authService: AuthService) {

        this.user = new User();
        this.country = new Country();
    }

    ngOnInit() {
        this.getCountries();
        this.authService.user.subscribe(user => {
            this.user = user;
            this.country = this.user.country;
        });
    }

    update() {
        this.userService.update(this.user).subscribe(
            userUpdated => {
                console.log(userUpdated);
                this.openSnackBar('User data update');
            });
    }

    getCountries(): void {
        this.countryService.getCountries()
            .subscribe(countries => this.countries = countries);
    }

    openSnackBar(msg:string) {

        this._snackBar.open(msg, 'close',{
            duration: 3 * 1000
        });


    }

}
