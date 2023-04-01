import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuickLink } from '../models/quicklinks.model';

const baseUrl = 'https://uat.afexintranet.org:7443/api/quicklinks';

@Injectable({
  providedIn: 'root'
})

export class QuickLinkService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<QuickLink[]> {
    return this.http.get<QuickLink[]>(baseUrl);
  }

  get(id: any): Observable<QuickLink> {
    return this.http.get<QuickLink>(`${baseUrl}/${id}`);
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

  findByTitle(title: any): Observable<QuickLink[]> {
    return this.http.get<QuickLink[]>(`${baseUrl}?title=${title}`);
  }
}
