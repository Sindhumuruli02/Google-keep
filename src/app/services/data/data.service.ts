import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataFromDS = new BehaviorSubject<string>("");
  currentData = this.dataFromDS.asObservable();

  constructor() { }

  updateData(data: string) {
    this.dataFromDS.next(data);
  }
}