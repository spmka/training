import {Request, Response} from 'express';
import {logisticSystems} from './logistic-systems.data';
import {AbstractEndPointController} from '../abstract-end-point-controller';
import {logEntries} from '../log-entries/log-entries.data';


/** Defines all routes belonging to our logistic systems */
export class LogisticSystemsEndPointsController extends AbstractEndPointController {

  /** Set up our logistic systems end points */
  protected setupEndPoints() {
    this.expressRouter.get('/', (req: Request, res: Response) => this.handleGetAll(res));
    this.expressRouter.get('/:id', (req: Request, res: Response) => this.handleGetById(res, +req.params.id));
    this.expressRouter.get('/:id/log-entries', (req: Request, res: Response) => this.handleGetLogEnties(res, +req.params.id));
  }

  /**
   * Handles a get request for all systems. 
   * @param response the http response of the http get call.
   */
  private handleGetAll(response: Response) {
    response.send(logisticSystems);
  }

  /**
   * Handles a get request for one systems.
   * @param response the http response of the http get call.
   * @param systemId the system id the caller looks for.
   */
  private handleGetById(response: Response, systemId: number) {
    const systemFound = logisticSystems.find(system => system.id === systemId);
    if (systemFound) {
      response.send(systemFound);
    } else {
      response.status(404).send({ message: `No system with id ${systemId} found!` })
    }
  }

  /** Handles a get request for a systems log entries
   * @param response the http response of the http get call.
   * @param systemId the system id the caller wants the log entries for.
   */
  private handleGetLogEnties(response: Response, systemId: number) {
    const fillteredlogEntries = logEntries.filter(logEntry => logEntry.systemId === systemId);
    response.send(fillteredlogEntries);
  }
  
}
