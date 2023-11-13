import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {Country} from "../../model/country";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CountryService} from "../../service/country/country.service";
import {UserService} from "../../service/user/user.service";
import {AuthService} from "../../service/auth-service";

@Component({
    selector: 'app-profile-personal-details',
    templateUrl: './profile-personal-details.component.html',
    styleUrls: ['./profile-personal-details.component.scss']
})
export class ProfilePersonalDetailsComponent implements OnInit {

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

    openSnackBar(msg: string) {

        this._snackBar.open(msg, 'close', {
            duration: 3 * 1000
        });


    }


}
