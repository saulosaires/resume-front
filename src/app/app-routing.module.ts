import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
    {path: 'dashboard', component: ProfileComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
