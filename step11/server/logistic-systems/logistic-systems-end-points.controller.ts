import {Request, Response} from 'express';
import {logisticSystems} from './logistic-systems.data';
import {AbstractEndPointController} from '../abstract-end-point-controller';
import {logEntries} from '../log-entries/log-entries.data';


/** Defines all routes belonging to our logistic systems */
export class LogisticSystemsEndPointsController extends AbstractEndPointController {

  /** Set up our logistic systems end points */
  protected setupEndPoints() {
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
        res.status(404).send({message: `No system with id ${id} found!`})
      }
    });

    this.expressRouter.get('/:id/log-entries', (req: Request, res: Response) => {
      const systemId = parseInt(req.params.id);
      const fillteredlogEntries = logEntries.filter(logEntry => logEntry.systemId === systemId);
      res.send(fillteredlogEntries);
    });
  }
}