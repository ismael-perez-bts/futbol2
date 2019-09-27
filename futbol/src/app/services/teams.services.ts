import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Team } from '../model/Team';

@Injectable ( {
    providedIn: 'root'
})

export class TeamsService {

    constructor (private http: HttpClient) {


    }

    public getTeams (): Observable<Team []> {
        console.log(this.http.get<Team []>(`${environment.apiUrl}/table`))
       return this.http.get<Team []>(`${environment.apiUrl}/table`)
       .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
       );
    }
}