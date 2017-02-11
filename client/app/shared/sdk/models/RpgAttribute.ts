/* tslint:disable */
import {
  RpgBoard,
  RpgSkill,
  RpgPlayerRpgAttribute,
  RpgRoleRpgAttribute,
  RpgRaceRpgAttribute
} from '../index';

declare var Object: any;
export interface RpgAttributeInterface {
  name: string;
  id?: any;
  rpgBoardId?: any;
  rpgBoard?: RpgBoard;
  rpgSkills?: RpgSkill[];
  rpgPlayerRpgAttribute?: RpgPlayerRpgAttribute[];
  rpgRoleRpgAttributes?: RpgRoleRpgAttribute[];
  rpgRaceRpgAttributes?: RpgRaceRpgAttribute[];
}

export class RpgAttribute implements RpgAttributeInterface {
  name: string;
  id: any;
  rpgBoardId: any;
  rpgBoard: RpgBoard;
  rpgSkills: RpgSkill[];
  rpgPlayerRpgAttribute: RpgPlayerRpgAttribute[];
  rpgRoleRpgAttributes: RpgRoleRpgAttribute[];
  rpgRaceRpgAttributes: RpgRaceRpgAttribute[];
  constructor(data?: RpgAttributeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgAttribute`.
   */
  public static getModelName() {
    return "RpgAttribute";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgAttribute for dynamic purposes.
  **/
  public static factory(data: RpgAttributeInterface): RpgAttribute{
    return new RpgAttribute(data);
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
      name: 'RpgAttribute',
      plural: 'RpgAttributes',
      properties: {
        name: {
          name: 'name',
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
        rpgSkills: {
          name: 'rpgSkills',
          type: 'RpgSkill[]',
          model: 'RpgSkill'
        },
        rpgPlayerRpgAttribute: {
          name: 'rpgPlayerRpgAttribute',
          type: 'RpgPlayerRpgAttribute[]',
          model: 'RpgPlayerRpgAttribute'
        },
        rpgRoleRpgAttributes: {
          name: 'rpgRoleRpgAttributes',
          type: 'RpgRoleRpgAttribute[]',
          model: 'RpgRoleRpgAttribute'
        },
        rpgRaceRpgAttributes: {
          name: 'rpgRaceRpgAttributes',
          type: 'RpgRaceRpgAttribute[]',
          model: 'RpgRaceRpgAttribute'
        },
      }
    }
  }
}
