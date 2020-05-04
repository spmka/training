import {Request, Response} from 'express';
import {AbstractEndPointsController} from '../abstract-end-points.controller';
import {LogEntriesProvider} from './log-entries.data';

/** Defines all routes belonging to log entries */
export class LogEntriesEndPointsController extends AbstractEndPointsController{

  /** Set up our log entries end points */
  protected setupEndPoints() {
    // We return the JSON object (array of log entries)
    this.expressRouter.get('/', (req: Request, res: Response) => {
      res.send(new LogEntriesProvider().getLogEntries());
    });
  }
}