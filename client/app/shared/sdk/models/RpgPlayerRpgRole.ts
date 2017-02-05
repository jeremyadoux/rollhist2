/* tslint:disable */
import {
  RpgPlayer,
  RpgRole
} from '../index';

declare var Object: any;
export interface RpgPlayerRpgRoleInterface {
  data?: string;
  id?: any;
  rpgPlayerId?: any;
  rpgRoleId?: any;
  rpgPlayer?: RpgPlayer;
  rpgRole?: RpgRole;
}

export class RpgPlayerRpgRole implements RpgPlayerRpgRoleInterface {
  data: string;
  id: any;
  rpgPlayerId: any;
  rpgRoleId: any;
  rpgPlayer: RpgPlayer;
  rpgRole: RpgRole;
  constructor(data?: RpgPlayerRpgRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgPlayerRpgRole`.
   */
  public static getModelName() {
    return "RpgPlayerRpgRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgPlayerRpgRole for dynamic purposes.
  **/
  public static factory(data: RpgPlayerRpgRoleInterface): RpgPlayerRpgRole{
    return new RpgPlayerRpgRole(data);
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
      name: 'RpgPlayerRpgRole',
      plural: 'RpgPlayerRpgRoles',
      properties: {
        data: {
          name: 'data',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'any'
        },
        rpgPlayerId: {
          name: 'rpgPlayerId',
          type: 'any'
        },
        rpgRoleId: {
          name: 'rpgRoleId',
          type: 'any'
        },
      },
      relations: {
        rpgPlayer: {
          name: 'rpgPlayer',
          type: 'RpgPlayer',
          model: 'RpgPlayer'
        },
        rpgRole: {
          name: 'rpgRole',
          type: 'RpgRole',
          model: 'RpgRole'
        },
      }
    }
  }
}
