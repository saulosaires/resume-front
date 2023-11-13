import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {
    GoogleLoginProvider,
    GoogleSigninButtonModule,
    SocialAuthServiceConfig,
    SocialLoginModule
} from '@abacritt/angularx-social-login'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileMenuComponent} from './profile-menu/profile-menu.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule} from "@angular/forms";
import {SnackBarInterceptor} from "./interceptor/snack-bar-interceptor";
import {SignInComponent} from './sign-in/sign-in.component';
import {NgOptimizedImage} from "@angular/common";
import {ProfilePersonalDetailsComponent} from './profile/profile-personal-details/profile-personal-details.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileMenuComponent,
        ProfileComponent,
        SignInComponent,
        ProfilePersonalDetailsComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        SocialLoginModule,
        GoogleSigninButtonModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatDividerModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgOptimizedImage

    ],
    providers: [{
        provide: HTTP_INTERCEPTORS, useClass: SnackBarInterceptor, multi: true
    }, {
        provide: 'SocialAuthServiceConfig',
        useValue: {
            autoLogin: true,
            providers: [
                {
                    id: GoogleLoginProvider.PROVIDER_ID,
                    provider: new GoogleLoginProvider(('957001662031-msgo7pbtft5s6a388r9lsumetbu8ct2k.apps.googleusercontent.com'))
                }
            ],
            onError: (err) => {
                console.log(err);
            }
        } as SocialAuthServiceConfig

    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
