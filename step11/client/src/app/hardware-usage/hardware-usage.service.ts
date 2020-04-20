import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HardwareUsageList} from '../../../../server/hardware-usages/hardware-usage.model'; 
import {Result} from '../tools/result';

@Injectable({
  providedIn: 'root'
})
export class HardwareUsageService {
  // The url to the hardware usage data for a system.
  private getHardwareUsageByIdUrl: string;

  /**
   * Constructor.
   * @param http the injected http client.
   */
  constructor(private http: HttpClient) {
    this.getHardwareUsageByIdUrl = 'api/hardware-usages?systemId=';
  }
  
  /**
   * Returns a list of hardware usages for the given system.
   * @param systemId the id of the system to load the hardware usage for.
   */
  public async loadHardwareUsageData(systemId: number): Promise<Result<HardwareUsageList, Error>> {
    try {
      const hardwareUsages = await this.http.get<HardwareUsageList>(this.getHardwareUsageByIdUrl + systemId).toPromise();
      return Result.ok(hardwareUsages);
    } catch (error) {
      return Result.err(error);
    }
  }
}
