import {Router, Request, Response} from 'express';
import {AbstractEndPointController} from '../abstract-end-point-controller';
import {hardwareUsages} from './hardware-usages.data';

/** Defines all routes belonging to log entries */
export class HardwareUsageEndPointsController extends AbstractEndPointController {

  /** Set up our hardware usages end points */
  protected setupEndPoints() {
    // We return the JSON object (array of hardware usages)
    // A parameter could be the system id like ?systemId=5
    this.expressRouter.get('/', (req: Request, res: Response) => {
      const systemId = req.query.systemId;
      console.log(req.query);
      if (systemId) {
        const filteredHardwareUsages = hardwareUsages.filter(hwUsage => hwUsage.systemId === parseInt(systemId));
        res.send(filteredHardwareUsages);
      } else {
        // No query parameter defined
        res.send(hardwareUsages);
      }
    });
  }
}