/* tslint:disable */
import {
  RpgPlayer,
  RpgRace
} from '../index';

declare var Object: any;
export interface RpgPlayerRpgRaceInterface {
  data?: any;
  id?: any;
  rpgPlayerId?: any;
  rpgRaceId?: any;
  rpgPlayer?: RpgPlayer;
  rpgRace?: RpgRace;
}

export class RpgPlayerRpgRace implements RpgPlayerRpgRaceInterface {
  data: any;
  id: any;
  rpgPlayerId: any;
  rpgRaceId: any;
  rpgPlayer: RpgPlayer;
  rpgRace: RpgRace;
  constructor(data?: RpgPlayerRpgRaceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgPlayerRpgRace`.
   */
  public static getModelName() {
    return "RpgPlayerRpgRace";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgPlayerRpgRace for dynamic purposes.
  **/
  public static factory(data: RpgPlayerRpgRaceInterface): RpgPlayerRpgRace{
    return new RpgPlayerRpgRace(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'RpgPlayerRpgRace',
      plural: 'RpgPlayerRpgRaces',
      properties: {
        data: {
          name: 'data',
          type: 'any'
        },
        id: {
          name: 'id',
          type: 'any'
        },
        rpgPlayerId: {
          name: 'rpgPlayerId',
          type: 'any'
        },
        rpgRaceId: {
          name: 'rpgRaceId',
          type: 'any'
        },
      },
      relations: {
        rpgPlayer: {
          name: 'rpgPlayer',
          type: 'RpgPlayer',
          model: 'RpgPlayer'
        },
        rpgRace: {
          name: 'rpgRace',
          type: 'RpgRace',
          model: 'RpgRace'
        },
      }
    }
  }
}
