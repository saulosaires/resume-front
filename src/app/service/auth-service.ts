import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public user = new BehaviorSubject<any>({
        user: undefined
    })

    constructor() {

    }


}
