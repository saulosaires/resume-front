import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor() {

    }

  public user = new BehaviorSubject<any>({
    user: undefined
  })



}
