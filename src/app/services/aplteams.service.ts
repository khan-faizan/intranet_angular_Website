import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APLTeams } from '../models/aplteams.model';

const baseUrl = 'https://uat.afexintranet.org:7443/api/aplteams';

@Injectable({
  providedIn: 'root'
})

export class APLTeamService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<APLTeams[]> {
    console.log("calling api");
    return this.http.get<APLTeams[]>(baseUrl);
  }

  get(id: any): Observable<APLTeams> {
    return this.http.get<APLTeams>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<APLTeams[]> {
    return this.http.get<APLTeams[]>(`${baseUrl}?title=${title}`);
  }
}
