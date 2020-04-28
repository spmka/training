import {AbstractExpressServer} from './abstract-express-server';
import {LogEntriesEndPointsController} from './log-entries/log-entries.end-points.controller';
import {LogisticSystemsEndPointsController} from './logistic-systems/logistic-systems-end-points.controller';
import {HardwareUsagesEndPointsController} from './hardware-usages/hardware-usages-end-points.controller';


/** The control tower data server */
class Server extends AbstractExpressServer {
  /** The base url for the logistic systems end points */
  private readonly logisticSystemsBaseUrl: string = '/logistic-systems';
  /** The base url for the log entries end points */
  private readonly logEntriesBaseUrl: string = '/log-entries';
  /** The base url for the hardware usage end points */
  private readonly hardwareUsagesBaseUrl: string = '/hardware-usages';

  /**
   * Constructor.
   * @param port The port the control tower server listens on.
   */
  constructor(port: number) {
    super(port);
  }

  /** Sets up all endpoints (routes) we want to use */
  protected setupEndPoints() {
    this.expressServer.use(this.logisticSystemsBaseUrl,
      new LogisticSystemsEndPointsController().initializeEndPoints());
    this.expressServer.use(this.logEntriesBaseUrl,
      new LogEntriesEndPointsController().initializeEndPoints());
    this.expressServer.use(this.hardwareUsagesBaseUrl,
      new HardwareUsagesEndPointsController().initializeEndPoints());
  }
}

// We create the server and start it.
new Server(5000).start();