/* tslint:disable */
import {
  RpgBoard,
  RpgPlayerRpgRole,
  RpgPlayerRpgAttribute,
  RpgPlayerRpgSkill,
  RpgPlayerRpgRace
} from '../index';

declare var Object: any;
export interface RpgPlayerInterface {
  firstname: string;
  lastname: string;
  caseSize: number;
  age?: number;
  size?: string;
  weight?: string;
  id?: any;
  rpgBoardId?: any;
  rpgBoard?: RpgBoard;
  rpgPlayerRpgRole?: RpgPlayerRpgRole[];
  rpgPlayerRpgAttribute?: RpgPlayerRpgAttribute[];
  rpgPlayerRpgSkill?: RpgPlayerRpgSkill[];
  rpgPlayerRpgRace?: RpgPlayerRpgRace[];
}

export class RpgPlayer implements RpgPlayerInterface {
  firstname: string;
  lastname: string;
  caseSize: number;
  age: number;
  size: string;
  weight: string;
  id: any;
  rpgBoardId: any;
  rpgBoard: RpgBoard;
  rpgPlayerRpgRole: RpgPlayerRpgRole[];
  rpgPlayerRpgAttribute: RpgPlayerRpgAttribute[];
  rpgPlayerRpgSkill: RpgPlayerRpgSkill[];
  rpgPlayerRpgRace: RpgPlayerRpgRace[];
  constructor(data?: RpgPlayerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgPlayer`.
   */
  public static getModelName() {
    return "RpgPlayer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgPlayer for dynamic purposes.
  **/
  public static factory(data: RpgPlayerInterface): RpgPlayer{
    return new RpgPlayer(data);
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
      name: 'RpgPlayer',
      plural: 'RpgPlayers',
      properties: {
        firstname: {
          name: 'firstname',
          type: 'string'
        },
        lastname: {
          name: 'lastname',
          type: 'string'
        },
        caseSize: {
          name: 'caseSize',
          type: 'number',
          default: 1
        },
        age: {
          name: 'age',
          type: 'number'
        },
        size: {
          name: 'size',
          type: 'string'
        },
        weight: {
          name: 'weight',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'any'
        },
        rpgBoardId: {
          name: 'rpgBoardId',
          type: 'any'
        },
      },
      relations: {
        rpgBoard: {
          name: 'rpgBoard',
          type: 'RpgBoard',
          model: 'RpgBoard'
        },
        rpgPlayerRpgRole: {
          name: 'rpgPlayerRpgRole',
          type: 'RpgPlayerRpgRole[]',
          model: 'RpgPlayerRpgRole'
        },
        rpgPlayerRpgAttribute: {
          name: 'rpgPlayerRpgAttribute',
          type: 'RpgPlayerRpgAttribute[]',
          model: 'RpgPlayerRpgAttribute'
        },
        rpgPlayerRpgSkill: {
          name: 'rpgPlayerRpgSkill',
          type: 'RpgPlayerRpgSkill[]',
          model: 'RpgPlayerRpgSkill'
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
