import { TestBed, async } from '@angular/core/testing';
import { CustomerComponent } from './CustomerApp.CustomerComponent';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import {  HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from '../Home/CustomerApp.MasterPageComponent';
import { By } from "@angular/platform-browser";
import { MyInterceptor } from '../Utilities/Utility.HttpInterceptor';
import { BaseLogger, ConsoleLogger, DbLogger } from '../Utilities/CustomerApp.Logger';
import { GridComponent } from '../Utilities/CustomerApp.GridComponent';
var providerscoll:any = [];
// http call get this from the server
providerscoll.push({ provide: "1", useClass: DbLogger });
providerscoll.push({ provide: "2", useClass: ConsoleLogger });
providerscoll.push({ provide: BaseLogger, useClass: ConsoleLogger });

describe('  when customer  add click is working', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(MainRoutes),
        RouterModule.forChild(CustomerRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule],
      declarations: [
       HomeComponent, MasterPageComponent,   CustomerComponent , GridComponent 
      ],
      providers: [
        {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor , 
       multi:true},providerscoll
     
       ]
    }).compileComponents();
   
  }));

 
  it(`  shows row count more than 1 in grid'`, () => {
    const fixture = TestBed.createComponent(CustomerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#txtcode').value = "1009";
    compiled.querySelector('#txtcode').dispatchEvent(new Event('input'));
    fixture.detectChanges();
    compiled.querySelector('#txtname').value = "shiv";
    compiled.querySelector('#txtname').dispatchEvent(new Event('input'));
    fixture.detectChanges();
    compiled.querySelector('#txtamount').value = "100.23";
    compiled.querySelector('#txtamount').dispatchEvent(new Event('input'));
    fixture.detectChanges();
   
    compiled.querySelector('#btnadd').click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const grid = fixture.debugElement.query(By.directive(GridComponent));
    
      expect(compiled.querySelector("#mytable").rows.length).toBeGreaterThan(1);
    });   
    
  }); 

});
