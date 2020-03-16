import * as express from 'express';
import {Express, Request, Response} from 'express-serve-static-core'

const systems = [
  {id: 1, name: 'Logistikbus'},
  {id: 2, name: 'ELS'},
  {id: 3, name: 'WMS'},
  {id: 4, name: 'LIBS'},
  {id: 5, name: 'VDS2'},
  {id: 6, name: 'VAS2000'},
  {id: 7, name: 'PRIMUS'},
  {id: 8, name: 'IPS'}
]

/** The control tower data server */
class Server {
  /** The ExpressJSserver */
  private expressServer: Express;

  /**
   * Constructor.
   * @param port The port the control tower server listens on.
   */
  constructor(private port: number) {
    this.expressServer = express();
    this.expressServer.use(express.json())
    this.setupRoutes();
  }

  /** Starts the server on the defined port */
  public start() {
    this.expressServer.listen(this.port, () => console.log(`Server is listening on port ${this.port}`));
  }

  private setupRoutes() {
    this.expressServer.get('/', function(req: Request, res: Response) {
      res.send('Hello World!');
    });
    this.expressServer.get('/hello', (req: Request, res: Response) => {
      res.send('Hello World!!');
    });
    this.expressServer.get('/message', (req: Request, res: Response) => {
      res.send({message: 'Hello World!'});
    });
    this.expressServer.get('/systems', (req: Request, res: Response) => {
      res.send(systems);
    });
    this.expressServer.get('/systems/:id', (req: Request, res: Response) => {
      const id = req.params.id;
      const systemFound = systems.find(system => system.id === parseInt(id));
      if (systemFound) {
        res.send(systemFound);
      } else {
        res.status(404).send({message: `No system with id ${id} found!`})
      }
    });
  }
}

const server = new Server(5000);
server.start();