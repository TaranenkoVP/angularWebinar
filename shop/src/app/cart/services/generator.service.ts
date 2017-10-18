import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor() { }

  getString(length: number): string {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, length);;
  }
}