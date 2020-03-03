import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';
import { RendererComponent } from './renderer/renderer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
   AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, HelloComponent, RendererComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
