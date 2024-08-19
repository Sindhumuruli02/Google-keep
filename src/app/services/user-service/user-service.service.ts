import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http-service.service';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  loginApiCall(data: any) {
    return this.httpService.postAPIcall('/user/login', data);
  }

  registerApiCall(data: any) {
    return this.httpService.postAPIcall('/user/userSignUp', data);
  }
}