import * as express from 'express';
import {Express, Request, Response} from 'express-serve-static-core'

/** The control tower data server */
class Server {
  /** The ExpressJSserver */
  private expressServer: Express;
  /** All teh systems we know as a constant (readonly) property of this class */
  private readonly systems = [
    {id: 1, name: 'Logistikbus'},
    {id: 2, name: 'ELS'},
    {id: 3, name: 'WMS'},
    {id: 4, name: 'LIBS'},
    {id: 5, name: 'VDS2'},
    {id: 6, name: 'VAS2000'},
    {id: 7, name: 'PRIMUS'},
    {id: 8, name: 'IPS'}
  ]

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

  /** Sets up all endpoints (route) we want tu use */
  private setupRoutes() {
    // We set up a endpoint for a http GET and the URL "/"
    // Wen this endpoint is hit the defined anonymous function is executed with the parameters req and res  
    this.expressServer.get('/', function(req: Request, res: Response) {
      res.send('Hello World!');
    });

    // This is the alternative and preferred synatx with an arrow function
    this.expressServer.get('/hello', (req: Request, res: Response) => {
      res.send('Hello World!!');
    });

    // Here we return a JSON object to the caller
    this.expressServer.get('/message', (req: Request, res: Response) => {
      res.send({message: 'Hello World!'});
    });

    // We return the JSON object (array of systems) we defined at the beginning of the class
    this.expressServer.get('/systems', (req: Request, res: Response) => {
      res.send(this.systems);
    });

    // Now get a parameter (:id) and we return the system with that id 
    // or the error 404 NOT FOUND when we don't have a system with the given id
    this.expressServer.get('/systems/:id', (req: Request, res: Response) => {
      // We get the value for the parameter "id" from the req.params object
      const id = req.params.id;
      // We try to find the matching system in the systems array with the array function find()
      const systemFound = this.systems.find(system => system.id === parseInt(id));
      if (systemFound) {
        // Ok we found a system so we return it
        res.send(systemFound);
      } else {
        // We didn't find a system so we return a 404 and a message object
        res.status(404).send({message: `No system with id ${id} found!`})
      }
    });
  }
}

/** 
 * This code is outside the class and will be executed when we run this file.
 * We create a new instance of our server class ans start the server.
 */

// const server = new Server(5000);
// server.start();

// This is doing the same as the code above
new Server(5000).start();