import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trending } from '../models/trendings.model';

const baseUrl = 'https://uat.afexintranet.org:7443/api/trendings';

@Injectable({
  providedIn: 'root'
})

export class TrendingService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Trending[]> {
    console.log("calling api");
    return this.http.get<Trending[]>(baseUrl);
  }

  get(id: any): Observable<Trending> {
    return this.http.get<Trending>(`${baseUrl}/${id}`);
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

  findByTitle(title: any): Observable<Trending[]> {
    return this.http.get<Trending[]>(`${baseUrl}?title=${title}`);
  }
}
