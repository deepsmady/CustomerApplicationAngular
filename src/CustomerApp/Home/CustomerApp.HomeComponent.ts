import { Component } from '@angular/core';
import { BaseLogger } from '../Utilities/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.HomeView.html'
})

export class HomeComponent {
  LogObj: BaseLogger;
  constructor(_logObj:BaseLogger){
    this.LogObj = _logObj;
    this.LogObj.Log();
  }
}
