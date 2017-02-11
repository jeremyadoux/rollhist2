/* tslint:disable */
import {
  RpgRole,
  RpgSkill
} from '../index';

declare var Object: any;
export interface RpgRoleRpgSkillInterface {
  modif?: number;
  canMaster?: boolean;
  id?: any;
  rpgRoleId?: any;
  rpgSkillId?: any;
  rpgRole?: RpgRole;
  rpgSkill?: RpgSkill;
}

export class RpgRoleRpgSkill implements RpgRoleRpgSkillInterface {
  modif: number;
  canMaster: boolean;
  id: any;
  rpgRoleId: any;
  rpgSkillId: any;
  rpgRole: RpgRole;
  rpgSkill: RpgSkill;
  constructor(data?: RpgRoleRpgSkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgRoleRpgSkill`.
   */
  public static getModelName() {
    return "RpgRoleRpgSkill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgRoleRpgSkill for dynamic purposes.
  **/
  public static factory(data: RpgRoleRpgSkillInterface): RpgRoleRpgSkill{
    return new RpgRoleRpgSkill(data);
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
      name: 'RpgRoleRpgSkill',
      plural: 'RpgRoleRpgSkills',
      properties: {
        modif: {
          name: 'modif',
          type: 'number',
          default: 0
        },
        canMaster: {
          name: 'canMaster',
          type: 'boolean',
          default: true
        },
        id: {
          name: 'id',
          type: 'any'
        },
        rpgRoleId: {
          name: 'rpgRoleId',
          type: 'any'
        },
        rpgSkillId: {
          name: 'rpgSkillId',
          type: 'any'
        },
      },
      relations: {
        rpgRole: {
          name: 'rpgRole',
          type: 'RpgRole',
          model: 'RpgRole'
        },
        rpgSkill: {
          name: 'rpgSkill',
          type: 'RpgSkill',
          model: 'RpgSkill'
        },
      }
    }
  }
}
