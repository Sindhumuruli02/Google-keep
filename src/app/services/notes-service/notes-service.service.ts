import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private httpservice: HttpService) {}
  access_token = localStorage.getItem('access_token');
  getAllNotesApiCall(endpoint: string) {
    return this.httpservice.getAPICall(
      `/notes/${endpoint}?access_token=${this.access_token}`
    );
  }

  addNotesApiCall(url:any, data: any) {
    return this.httpservice.postAPIcall(
      `${url}?access_token=${this.access_token}`,
      data
    );
  }
}