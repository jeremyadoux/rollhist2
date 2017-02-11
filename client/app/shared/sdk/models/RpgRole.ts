/* tslint:disable */
import {
  RpgBoard,
  RpgPlayerRpgRole,
  RpgRoleRpgAttribute,
  RpgRoleRpgSkill
} from '../index';

declare var Object: any;
export interface RpgRoleInterface {
  name: string;
  id?: any;
  rpgBoardId?: any;
  rpgBoard?: RpgBoard;
  rpgPlayerRpgRole?: RpgPlayerRpgRole[];
  rpgRoleRpgAttributes?: RpgRoleRpgAttribute[];
  rpgRoleRpgSkills?: RpgRoleRpgSkill[];
}

export class RpgRole implements RpgRoleInterface {
  name: string;
  id: any;
  rpgBoardId: any;
  rpgBoard: RpgBoard;
  rpgPlayerRpgRole: RpgPlayerRpgRole[];
  rpgRoleRpgAttributes: RpgRoleRpgAttribute[];
  rpgRoleRpgSkills: RpgRoleRpgSkill[];
  constructor(data?: RpgRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgRole`.
   */
  public static getModelName() {
    return "RpgRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgRole for dynamic purposes.
  **/
  public static factory(data: RpgRoleInterface): RpgRole{
    return new RpgRole(data);
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
      name: 'RpgRole',
      plural: 'RpgRoles',
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
        rpgPlayerRpgRole: {
          name: 'rpgPlayerRpgRole',
          type: 'RpgPlayerRpgRole[]',
          model: 'RpgPlayerRpgRole'
        },
        rpgRoleRpgAttributes: {
          name: 'rpgRoleRpgAttributes',
          type: 'RpgRoleRpgAttribute[]',
          model: 'RpgRoleRpgAttribute'
        },
        rpgRoleRpgSkills: {
          name: 'rpgRoleRpgSkills',
          type: 'RpgRoleRpgSkill[]',
          model: 'RpgRoleRpgSkill'
        },
      }
    }
  }
}
