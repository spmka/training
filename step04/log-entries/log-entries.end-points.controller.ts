import {Router, Request, Response} from 'express';
import {AbstractEndPointController} from '../abstract-end-points.controller';
import {logEntries} from './log-entries.data';

/** Defines all routes belonging to log entries */
export class LogEntriesEndPointsController extends AbstractEndPointController{

  /** Set up our log entries end points */
  protected setupEndPoints() {
    // We return the JSON object (array of log entries)
    this.expressRouter.get('/', (req: Request, res: Response) => {
      res.send(logEntries);
    });
  }
}