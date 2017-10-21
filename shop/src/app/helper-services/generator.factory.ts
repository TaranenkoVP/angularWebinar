import { InjectionToken } from '@angular/core';

export const RANDOM_GENERATOR = new InjectionToken<string>('Random Generator');

export function GeneratorFactory(length: number) {
  return (): string => {
    return Math.random().toString(36).replace(/[^a-zA-Z0-9]+/g, '').substr(0, length);;
  }
}