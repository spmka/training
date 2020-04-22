import * as express from 'express';
import {Router} from 'express';

/** An abstract endpoint controller */
export abstract class AbstractEndPointsController {
  /** The ExpressJS router */
  protected expressRouter: Router;

  /** Constructor. */
  constructor() {
    this.expressRouter = express.Router();
  }

  /** setup the routes, must be implemented by child classes */
  protected abstract setupEndPoints();

  /** Initializes and returns the modified router with our added end points */
  public initializeEndPoints(): Router {
    this.setupEndPoints();
    return this.expressRouter;
  }
}