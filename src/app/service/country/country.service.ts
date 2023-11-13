import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Country} from "../../model/country";

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    private countryPath = '/api/country';

    constructor(private http: HttpClient) {
    }

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(this.countryPath + '/all')
            .pipe(
                tap(_ => console.log('fetched Countries')),
                catchError(this.handleError<Country[]>('getCountries', []))
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
