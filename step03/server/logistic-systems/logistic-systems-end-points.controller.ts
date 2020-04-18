import { Request, Response } from 'express';
import { logisticSystems } from './logistic-systems.data';
import { AbstractEndPointController } from '../abstract-end-point-controller';

/** Defines all routes belonging to our logistic systems */
export class LogisticSystemsEndPointsController extends AbstractEndPointController {

  /** Set up our logistic systems end points */
  protected setupEndPoints() {
    // this.setupEndPointsWay1();
    // this.setupEndPointsWay2();
    this.setupEndPointsWay3();
  }

  /** Set up our logistic systems end points */
  protected setupEndPointsWay1() {
    // We return the JSON object (array of logistic systems)
    this.expressRouter.get('/', (req: Request, res: Response) => {
      res.send(logisticSystems);
    });

    // Now get a parameter (:id) and we return the system with that id 
    // or the error 404 NOT FOUND when we don't have a system with the given id
    this.expressRouter.get('/:id', (req: Request, res: Response) => {
      // We get the value for the parameter "id" from the req.params object
      const id = req.params.id;
      // We try to find the matching system in the systems array with the array function find()
      const systemFound = logisticSystems.find(system => system.id === parseInt(id));
      if (systemFound) {
        // Ok we found a system so we return it
        res.send(systemFound);
      } else {
        // We didn't find a system so we return a 404 and a message object
        res.status(404).send({ message: `No system with id ${id} found!` })
      }
    });
  }

  // ==========================================================================
  // ==========================================================================

  /** Set up our logistic systems end points */
  protected setupEndPointsWay2() {
    this.expressRouter.get('/', this.handleGetAllCallback);
    this.expressRouter.get('/:id', this.handleGetByIdCallback);
  }

  /**
   * Handles a get request for all systems. 
   * @param request the http request of the http get call.
   * @param response the http response of the http get call.
   */
  private handleGetAllCallback(request: Request, response: Response) {
    response.send(logisticSystems);
  }

  /**
   * Handles a get request for one systems. 
   * @param request the http request of the http get call.
   * @param response the http response of the http get call.
   */
  private handleGetByIdCallback(request: Request, response: Response) {
    // Danger, we have to know here that id is a request parameter!
    const systemId: number = +request.params.id;
    const systemFound = logisticSystems.find(system => system.id === systemId);
    if (systemFound) {
      response.send(systemFound);
    } else {
      response.status(404).send({ message: `No system with id ${systemId} found!` })
    }
  }

  // ==========================================================================
  // ==========================================================================

  /** Set up our logistic systems end points */
  protected setupEndPointsWay3() {
    this.expressRouter.get('/', (req: Request, res: Response) => this.handleGetAll(res));
    this.expressRouter.get('/:id', (req: Request, res: Response) => this.handleGetById(res, +req.params.id));
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
}