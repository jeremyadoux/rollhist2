/* tslint:disable */
import {
  RpgAttribute,
  RpgSkill,
  RpgRole,
  RpgPlayer
} from '../index';

declare var Object: any;
export interface RpgBoardInterface {
  name: string;
  id?: any;
  rpgAttributes?: RpgAttribute[];
  rpgSkills?: RpgSkill[];
  rpgRoles?: RpgRole[];
  rpgPlayers?: RpgPlayer[];
}

export class RpgBoard implements RpgBoardInterface {
  name: string;
  id: any;
  rpgAttributes: RpgAttribute[];
  rpgSkills: RpgSkill[];
  rpgRoles: RpgRole[];
  rpgPlayers: RpgPlayer[];
  constructor(data?: RpgBoardInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgBoard`.
   */
  public static getModelName() {
    return "RpgBoard";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgBoard for dynamic purposes.
  **/
  public static factory(data: RpgBoardInterface): RpgBoard{
    return new RpgBoard(data);
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
      name: 'RpgBoard',
      plural: 'RpgBoards',
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
        rpgAttributes: {
          name: 'rpgAttributes',
          type: 'RpgAttribute[]',
          model: 'RpgAttribute'
        },
        rpgSkills: {
          name: 'rpgSkills',
          type: 'RpgSkill[]',
          model: 'RpgSkill'
        },
        rpgRoles: {
          name: 'rpgRoles',
          type: 'RpgRole[]',
          model: 'RpgRole'
        },
        rpgPlayers: {
          name: 'rpgPlayers',
          type: 'RpgPlayer[]',
          model: 'RpgPlayer'
        },
      }
    }
  }
}
