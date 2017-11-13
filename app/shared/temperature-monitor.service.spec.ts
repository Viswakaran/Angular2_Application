import { TestBed } from '@angular/core/testing';
import { TemperatureMonitorService } from './temperature-monitor.service';

describe('TemperatureMonitorService',()=>{
  
  let service: TemperatureMonitorService;
  beforeEach(()=> {
    service = new TemperatureMonitorService();
  });
  
  it('Should return empty array',()=>{
    
    expect(service.getTemperatureValues()).toEqual([]);
    expect(service.getCurrentMedian()).toEqual(null);
  });
  
  it('Should return true and value after temperature inserted',()=>{
    
    expect(service.recordTemperature(10)).toEqual(true);
    expect(service.getTemperatureValues()).toEqual([10]);
    expect(service.getCurrentMedian()).toEqual(10);
  });
  
  it('Should return current median temperature when even values',()=>{
    [ 5, 1, -7, 7, 8, 3].map(num => service.recordTemperature(num));
    expect(service.getTemperatureValues()).toEqual([5, 1, -7, 7, 8, 3]);
    expect(service.getCurrentMedian()).toEqual(4);
  });
  
  it('Should return current median temperature when odd values',()=>{
    [ 5, 1, -7, 7, 8, 3, 9].map(num => service.recordTemperature(num));
    expect(service.getTemperatureValues()).toEqual([5, 1, -7, 7, 8, 3, 9]);
    expect(service.getCurrentMedian()).toEqual(5);
  });
  
  it('Should return current median temperature when odd values',()=>{
    [ 5, 1, -7, 7, 8, 3, 9, -18].map(num => service.recordTemperature(num));
    expect(service.recordTemperature(10)).toEqual(false);
    expect(service.getTemperatureValues()).toEqual([5, 1, -7, 7, 8, 3, 9, -18]);
    expect(service.getCurrentMedian()).toEqual(4);
  });
  
});