import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from '../models/announcements.model';

const baseUrl = 'https://uat.afexintranet.org:7443/api/announcements';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Announcement[]> {
    console.log("calling api");
    return this.http.get<Announcement[]>(baseUrl);
  }

  get(id: any): Observable<Announcement> {
    return this.http.get<Announcement>(`${baseUrl}/${id}`);
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

  findByTitle(title: any): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${baseUrl}?title=${title}`);
  }
}
