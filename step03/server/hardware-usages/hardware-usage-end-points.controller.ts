import {Request, Response} from 'express';
import {AbstractEndPointsController} from '../abstract-end-points.controller';
import {hardwareUsages} from './hardware-usages.data';

/** Defines all routes belonging to log entries */
export class HardwareUsageEndPointsController extends AbstractEndPointsController{

  /** Set up our hardware usages end points */
  protected setupEndPoints() {
    // We return the JSON object (array of hardware usages)
    this.expressRouter.get('/', (req: Request, res: Response) => {
      res.send(hardwareUsages);
    });
  }
}