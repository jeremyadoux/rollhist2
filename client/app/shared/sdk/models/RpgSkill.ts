/* tslint:disable */
import {
  RpgBoard,
  RpgAttribute,
  RpgPlayerRpgSkill,
  RpgRoleRpgSkill,
  RpgRaceRpgSkill
} from '../index';

declare var Object: any;
export interface RpgSkillInterface {
  name: string;
  id?: any;
  rpgBoardId?: any;
  rpgAttributeId?: any;
  rpgBoard?: RpgBoard;
  rpgAttribute?: RpgAttribute;
  rpgPlayerRpgSkill?: RpgPlayerRpgSkill[];
  rpgRoleRpgSkills?: RpgRoleRpgSkill[];
  rpgRaceRpgSkills?: RpgRaceRpgSkill[];
}

export class RpgSkill implements RpgSkillInterface {
  name: string;
  id: any;
  rpgBoardId: any;
  rpgAttributeId: any;
  rpgBoard: RpgBoard;
  rpgAttribute: RpgAttribute;
  rpgPlayerRpgSkill: RpgPlayerRpgSkill[];
  rpgRoleRpgSkills: RpgRoleRpgSkill[];
  rpgRaceRpgSkills: RpgRaceRpgSkill[];
  constructor(data?: RpgSkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgSkill`.
   */
  public static getModelName() {
    return "RpgSkill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgSkill for dynamic purposes.
  **/
  public static factory(data: RpgSkillInterface): RpgSkill{
    return new RpgSkill(data);
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
      name: 'RpgSkill',
      plural: 'RpgSkills',
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
        rpgAttributeId: {
          name: 'rpgAttributeId',
          type: 'any'
        },
      },
      relations: {
        rpgBoard: {
          name: 'rpgBoard',
          type: 'RpgBoard',
          model: 'RpgBoard'
        },
        rpgAttribute: {
          name: 'rpgAttribute',
          type: 'RpgAttribute',
          model: 'RpgAttribute'
        },
        rpgPlayerRpgSkill: {
          name: 'rpgPlayerRpgSkill',
          type: 'RpgPlayerRpgSkill[]',
          model: 'RpgPlayerRpgSkill'
        },
        rpgRoleRpgSkills: {
          name: 'rpgRoleRpgSkills',
          type: 'RpgRoleRpgSkill[]',
          model: 'RpgRoleRpgSkill'
        },
        rpgRaceRpgSkills: {
          name: 'rpgRaceRpgSkills',
          type: 'RpgRaceRpgSkill[]',
          model: 'RpgRaceRpgSkill'
        },
      }
    }
  }
}
