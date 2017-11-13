import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Temperature } from './temperature.interface';
import { TemperatureMonitorService } from './temperature-monitor.service';
@Component({
  selector: 'temp-form',
  templateUrl: './app/shared/temperature-form.component.html'
})
export class TemperatureForm implements OnInit {
  public tempForm: FormGroup;
  public submitted: boolean;
  public tempValues: number[]=[];
  public medianTemperature: number;
  constructor (private _temperatureMonitorService: TemperatureMonitorService){
    
  }
  
  ngOnInit(){
    this.tempForm = new FormGroup({
      value: this.createFormGroup()
    });
  }
  
  addTemperature(model: temperature, isValid: boolean){
    this.submitted = true;
    let rVal = this._temperatureMonitorService.recordTemperature(model.value);
    if(!rVal)
    {
      this.message = "Maximum of 8 temperatures cab be added";
    }
    this.tempForm = new FormGroup({
      value: this.createFormGroup()
    });
    this.tempValues=this._temperatureMonitorService.getTemperatureValues();
  }
  
  getMedianValue(){
    this.medianTemperature = this._temperatureMonitorService.getCurrentMedian();
  }
  
  private createFormGroup() {
    return new FormControl('',[<any>Validators.required])
  }
}
