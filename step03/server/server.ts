import {AbstractExpressServer} from './abstract-express-server';
import {LogisticSystemsRoutes} from './logistic-systems.routes';

/** The control tower data server */
class Server extends AbstractExpressServer {
  /** The base url for the logistic systems routes */
  private readonly logisticSystemsBaseUrl: string = '/logistic-systems';
  
  /**
   * Constructor.
   * @param port The port the control tower server listens on.
   */
  constructor(port: number) {
    super(port);
  }

  /** Sets up all endpoints (routes) we want to use */
  protected setupRoutes() {
    const logisticSystemRoutes = new LogisticSystemsRoutes(this.expressRouter);
    this.expressServer.use(this.logisticSystemsBaseUrl, logisticSystemRoutes.getRouter());
  }
}

// We create the server and start it.
new Server(5000).start();