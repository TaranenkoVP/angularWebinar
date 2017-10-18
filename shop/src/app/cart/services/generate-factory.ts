import { InjectionToken } from "@angular/core";
import { GeneratorService } from "./generator.service";

export const App_Id = new InjectionToken<string>("App_Id");

export function RandomFactory(length: number) {
    return function(generator: GeneratorService): string {
        return generator.getString(length);
    }
}