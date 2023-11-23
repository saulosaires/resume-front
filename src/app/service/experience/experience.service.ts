import {Injectable} from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Experience} from "../../model/experience";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private countryPath = '/api/experience';

  constructor(private http: HttpClient) {
  }

  findByUserId(userId:number): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.countryPath + '/'+userId)
      .pipe(
        tap(_ => console.log('findByUserId'))
      );
  }


}
