import * as express from 'express';
import {Express, Request, Response, Router} from 'express';

export abstract class AbstractExpressServer {
  /** The ExpressJS server */
  protected expressServer: Express;

  /**
   * Constructor.
   * @param port The port the express server listens on.
   */
  constructor(protected port: number) {
    this.expressServer = express();
    this.expressServer.use(express.json())
  }

  /** Sets up all end points (or routes) the server should use */
  protected abstract setupEndPoints();

  /** Setup routes and start the server on the defined port */
  public start() {
    this.setupEndPoints();
    this.expressServer.listen(this.port, () =>
      console.log(`Server is listening on port ${this.port}`));
  }
}