import {Router, Request, Response} from 'express';
import {AbstractEndPointController} from '../abstract-end-point-controller';
import {hardwareUsages} from './hardware-usages.data';

/** Defines all routes belonging to log entries */
export class HardwareUsageEndPointsController extends AbstractEndPointController{

  /** Set up our hardware usages end points */
  protected setupEndPoints() {
    // We return the JSON object (array of hardware usages)
    this.expressRouter.get('/', (req: Request, res: Response) => {
      res.send(hardwareUsages);
    });
  }
}