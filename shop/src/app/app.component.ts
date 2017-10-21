import { Component, OnInit, Optional, Inject, InjectionToken } from '@angular/core';
import { LocalStorageService } from './helper-services/local-storage.service';
import { ConfigOptionsService } from './helper-services/config-options.service';
import { GeneratorFactory } from './helper-services/generator.factory';
import { RANDOM_GENERATOR } from './helper-services/generator.factory';

const ConstantsServiceToken = new InjectionToken<any>('title');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [
    { provide: RANDOM_GENERATOR, useFactory:  GeneratorFactory(5) },
    { provide: ConstantsServiceToken, useValue: {App: "Angular 4 training", Ver: "v1.0"} }]
})
export class AppComponent implements OnInit {
  configSavedNumber: number;

  constructor(   
    @Optional() private configService: ConfigOptionsService,
    @Optional() @Inject(RANDOM_GENERATOR)  public randomString: string,
    @Optional() @Inject(ConstantsServiceToken) public title: any, ) {
  }

  ngOnInit() {
    this.getConfig();
  }
  
  saveValue(value: number): void{
    if (this.configService){
      this.configService.addConfig("configSavedNumber", value);
      this.getConfig();
    }
  }

  private getConfig(): void{
    this.configSavedNumber = this.configService ? this.configService.getConfig("configSavedNumber") : "100500";
  }
}
