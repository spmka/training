import {Request, Response} from 'express';
import {AbstractEndPointController} from '../abstract-end-point-controller';
import {HardwareUsageProvider} from './hardware-usages.data';

/** Defines all routes belonging to log entries */
export class HardwareUsageEndPointsController extends AbstractEndPointController {

  /** Set up our hardware usages end points */
  protected setupEndPoints() {
    this.expressRouter.get('/', (req: Request, res: Response) => this.handleGetAll(res, +req.query.systemId));
  }

  /**
   * Handles the get request for all hardware usages or for a special system.
   * @param response the http get response.
   * @param systemId the system id to get the hardware usages for, may be undefined to get all hardware usages
   */
  private handleGetAll(response: Response, systemId: number) {
    const hardwareUsages = new HardwareUsageProvider().getHardwareUsages();

    if (systemId) {
      const filteredHardwareUsages = hardwareUsages.filter(hwUsage => hwUsage.systemId === systemId);
      response.send(filteredHardwareUsages);
    } else {
      // No query parameter defined
      response.send(hardwareUsages);
    }
  }
}