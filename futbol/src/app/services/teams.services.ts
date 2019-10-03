import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Team } from '../model/Team';

@Injectable ( {
    providedIn: 'root'
})

export class TeamsService {
    // private teamsUrl = 'api/table';  // URL to web api   
     httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

public showTitle: boolean = true;

    constructor (private http: HttpClient, private router: Router, private route: ActivatedRoute) {


    }


    

    public getTeams (): Observable<Team []> {
       return this.http.get<Team []>(`${environment.apiUrl}/teams`).pipe(map(items => items.sort(this.sortByName)))
        //return this.http.get<Team []>(this.teamsUrl).pipe(map(items => items.sort(this.sortByName)))  //conection to the url simulated API
       .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
       );
    }

    public getTeamsCards (): Observable<Team []> {
       return this.http.get<Team []>(`${environment.apiUrl}/teams`)
       //return this.http.get<Team []>(this.teamsUrl)  //conection to the url simulated API
       .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
       );
    }
  
  sortByName(a,b) {
  if (a.position < b.position)
    return -1;
  if (a.position > b.position)
    return 1;
  return 0;
}

public searchTeam (id: string): Observable<Team> {
      return this.http.get<Team>(`${environment.apiUrl}/teams/${id}`)
  //     return this.http.get<Team>(`${this.teamsUrl}/${id}`)
       .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
       );
}



public updateTeams (team: Team): Observable<Team> {
  console.log(team)
    return this.http.put<Team>(`${environment.apiUrl}/teams/${team.id}`, team)
 //   return this.http.put<Team>(`${this.teamsUrl}/${team.id}`, team)
  .pipe(
           catchError((err) => {
               alert('There was an error. ');
               return of(err);
            })
      );
}



}

