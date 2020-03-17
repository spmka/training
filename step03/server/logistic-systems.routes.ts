import {Router, Request, Response} from 'express';
import {logisticSystems} from '../logistic-systems.data';

/** Defines all routes belonging to our logistic systems */
export class LogisticSystemsRoutes {
  /**
   * Constructor.
   * @param router the express router.
   */
  constructor(private router: Router) {
    this.setupRoutes();
  }

  /** Returns the modified router with our added routes */
  public getRouter(): Router {
    return this.router;
  }

  private setupRoutes() {
    // We return the JSON object (array of logistic systems)
    this.router.get('/', (req: Request, res: Response) => {
      res.send(logisticSystems);
    });

    // Now get a parameter (:id) and we return the system with that id 
    // or the error 404 NOT FOUND when we don't have a system with the given id
    this.router.get('/:id', (req: Request, res: Response) => {
      // We get the value for the parameter "id" from the req.params object
      const id = req.params.id;
      // We try to find the matching system in the systems array with the array function find()
      const systemFound = logisticSystems.find(system => system.id === parseInt(id));
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