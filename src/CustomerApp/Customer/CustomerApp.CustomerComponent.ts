import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.model';
import { BaseLogger } from '../Utilities/CustomerApp.Logger';
import {HttpClient} from '@angular/common/http';
@Component({
  templateUrl: './CustomerApp.CustomerView.html'
})

export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();
  LogObj: BaseLogger;
  Disabled: boolean = false;
  constructor(_injector:Injector,public _httpClient: HttpClient){
    this.LogObj = _injector.get("1");
    this.LogObj.Log();
  }
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  hasError(typeOfValidator: string, controlName: string): boolean{
    return this.CustomerModel.formCustomerGroup.controls[controlName].hasError(typeOfValidator);
  }

  SelectCustomer(_selectedCustomer: Object){
    this.CustomerModel = _selectedCustomer as Customer;
  }

 
  PostToServer(){
    this.Disabled = true;
    var custDto: any ={
      CustomerCode : this.CustomerModel.CustomerCode,
      CustomerName : this.CustomerModel.CustomerName,
      CustomerAmount : this.CustomerModel.CustomerAmount
    };

    this._httpClient.post("http://localhost:3000/Customers",custDto).subscribe(
      res => this.Success(),res => this.Error(res)
    )
  }

  GetFromServer(){
    this._httpClient.get("http://localhost:3000/Customers").subscribe(
      res => this.SuccessGet(res as Array<Customer>),res => this.Error(res)
    )
  }

  SuccessGet(res:Array<Customer>){
    this.CustomerModels = res;
    this.CustomerModel = new Customer();
  }

  Error(res:any){
    this.Disabled = false;
    console.debug(res.json());
  }

  Success(){
    this.Disabled = false;
    this.GetFromServer();
  }


}
