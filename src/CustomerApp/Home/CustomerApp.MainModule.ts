import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { BaseLogger, ConsoleLogger, DbLogger, FileLogger } from '../Utilities/CustomerApp.Logger';

var providersCollection:any = [];
providersCollection.push({ provide: BaseLogger,  useClass: ConsoleLogger });
providersCollection.push({ provide: "1",  useClass: DbLogger});
providersCollection.push({ provide: "2",  useClass: FileLogger});

@NgModule({
  declarations: [
    MasterPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: providersCollection,
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
