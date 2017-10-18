import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string){
    localStorage.setItem(key, value);
  }

  removeItem(key: string){
    localStorage.removeItem(key);
  }
}
