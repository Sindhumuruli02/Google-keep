import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  BASE_URL = 'https://fundoonotes.incubation.bridgelabz.com/api';
  constructor(private http: HttpClient) {}
  postAPIcall(endpoint: string, data: any) {
    return this.http.post(this.BASE_URL + endpoint, data);
  }

  getAPICall(endpoint: string) {
    console.log(this.BASE_URL, endpoint);
    return this.http.get(this.BASE_URL + endpoint);
  }
}