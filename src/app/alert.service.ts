import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }
  success(message: string) {
    alert(message);
  }

  error(message: string) {
    alert(message);
  }

  clear() {
 
  }
}
