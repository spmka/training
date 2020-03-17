import * as express from 'express';
import {Express, Request, Response, Router} from 'express';

export abstract class AbstractExpressServer {
  /** The ExpressJS server */
  protected expressServer: Express;
  /** The ExpressJS router */
  protected expressRouter: Router;

  /**
   * Constructor.
   * @param port The port the express server listens on.
   */
  constructor(protected port: number) {
    this.expressServer = express();
    this.expressRouter = express.Router();
    this.expressServer.use(express.json())
  }

  /** Sets up all endpoints (routes) the server should use */
  protected abstract setupRoutes();

  /** Setup routes and start the server on the defined port */
  public start() {
    this.setupRoutes();
    this.expressServer.listen(this.port, () =>
      console.log(`Server is listening on port ${this.port}`));
  }
}