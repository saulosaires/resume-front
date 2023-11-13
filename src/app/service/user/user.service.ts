import {Injectable} from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    private path = '/api/user/';

    constructor(private http: HttpClient) {
    }

    create(user: User): Observable<User> {
        return this.http.post<User>(this.path, user, this.httpOptions)
            .pipe(
                tap(_ => console.log('userService.create'))
            );
    }

    getById(id: number): Observable<User> {
        return this.http.get<User>(this.path + id, this.httpOptions)
            .pipe(
                tap(_ => console.log('userService.getById'))
            );
    }

    update(user: User): Observable<User> {
        return this.http.put<User>(this.path, user, this.httpOptions)
            .pipe(
                tap(_ => console.log('userService.update'))
            );
    }

    signIn(user: User): Observable<User> {
        return this.http.post<User>(this.path + 'sign-in', user, this.httpOptions)
            .pipe(
                tap(_ => console.log('userService.signIn'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
