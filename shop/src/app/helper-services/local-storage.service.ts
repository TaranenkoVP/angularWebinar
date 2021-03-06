import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setItem(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string){
    localStorage.removeItem(key);
  }
}
