import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../Utilities/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.SupplierView.html'
})

export class SupplierComponent { 
  LogObj: BaseLogger;
  constructor(_injector:Injector){
    this.LogObj = _injector.get("2");
    this.LogObj.Log();
  } 
}
