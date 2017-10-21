import { Injectable } from '@angular/core';

@Injectable()
export class ConfigOptionsService {

  constructor() { }

  private config = {};

  addConfig(name: string, value: any): void {
    this.config[name] = value;
  }

  getConfig(name: string): any {
    return this.config[name];
  }
}