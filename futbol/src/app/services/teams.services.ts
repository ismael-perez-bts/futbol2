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
     private teamsUrl = 'api/table';  // URL to web api   

    constructor (private http: HttpClient) {


    }

    public getTeams (): Observable<Team []> {
       //return this.http.get<Team []>(`${environment.apiUrl}/table`)
       return this.http.get<Team []>(this.teamsUrl)  //conection to the url simulated API
       .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
       );
    }
}