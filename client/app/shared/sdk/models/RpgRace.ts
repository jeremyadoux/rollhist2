/* tslint:disable */
import {
  RpgRaceRpgSkill,
  RpgRaceRpgAttribute,
  RpgPlayerRpgRace
} from '../index';

declare var Object: any;
export interface RpgRaceInterface {
  name: string;
  id?: any;
  rpgRaceRpgSkills?: RpgRaceRpgSkill[];
  rpgRaceRpgAttributes?: RpgRaceRpgAttribute[];
  rpgPlayerRpgRace?: RpgPlayerRpgRace[];
}

export class RpgRace implements RpgRaceInterface {
  name: string;
  id: any;
  rpgRaceRpgSkills: RpgRaceRpgSkill[];
  rpgRaceRpgAttributes: RpgRaceRpgAttribute[];
  rpgPlayerRpgRace: RpgPlayerRpgRace[];
  constructor(data?: RpgRaceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgRace`.
   */
  public static getModelName() {
    return "RpgRace";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgRace for dynamic purposes.
  **/
  public static factory(data: RpgRaceInterface): RpgRace{
    return new RpgRace(data);
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
      name: 'RpgRace',
      plural: 'RpgRaces',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        rpgRaceRpgSkills: {
          name: 'rpgRaceRpgSkills',
          type: 'RpgRaceRpgSkill[]',
          model: 'RpgRaceRpgSkill'
        },
        rpgRaceRpgAttributes: {
          name: 'rpgRaceRpgAttributes',
          type: 'RpgRaceRpgAttribute[]',
          model: 'RpgRaceRpgAttribute'
        },
        rpgPlayerRpgRace: {
          name: 'rpgPlayerRpgRace',
          type: 'RpgPlayerRpgRace[]',
          model: 'RpgPlayerRpgRace'
        },
      }
    }
  }
}
