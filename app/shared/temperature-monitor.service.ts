import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {
  private values : array
  
  constructor(){
    this.values = [];
  }
  
  getTemperatureValues(): array {
    return this.values;
  }
  
  recordTemperature(val: number): boolean {
    if(this.values.length < 8 )
    {
      this.values.push(val);
      return true;
    }
    else{
      return false;
    }
  }
  
  getCurrentMedian(){
    if(this.values.length !== 0){
      console.log(this.values);
      let tVal = this.values.slice();
      tVal.sort();
      console.log(tVal);
      return (tVal[(tVal.length - 1) >> 1] + tVal[tVal.length >> 1]) / 2;
    }
    else{
      return null;
    }
  }
}