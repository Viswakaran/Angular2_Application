import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemperatureMonitorService } from './shared/temperature-monitor.service';
import { TemperatureForm } from './shared/temperature-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureForm
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TemperatureMonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
