/* tslint:disable */
import {
  RpgRole,
  RpgAttribute
} from '../index';

declare var Object: any;
export interface RpgRoleRpgAttributeInterface {
  modif?: number;
  id?: any;
  rpgRoleId?: any;
  rpgAttributeId?: any;
  rpgRole?: RpgRole;
  rpgAttribute?: RpgAttribute;
}

export class RpgRoleRpgAttribute implements RpgRoleRpgAttributeInterface {
  modif: number;
  id: any;
  rpgRoleId: any;
  rpgAttributeId: any;
  rpgRole: RpgRole;
  rpgAttribute: RpgAttribute;
  constructor(data?: RpgRoleRpgAttributeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgRoleRpgAttribute`.
   */
  public static getModelName() {
    return "RpgRoleRpgAttribute";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgRoleRpgAttribute for dynamic purposes.
  **/
  public static factory(data: RpgRoleRpgAttributeInterface): RpgRoleRpgAttribute{
    return new RpgRoleRpgAttribute(data);
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
      name: 'RpgRoleRpgAttribute',
      plural: 'RpgRoleRpgAttributes',
      properties: {
        modif: {
          name: 'modif',
          type: 'number',
          default: 0
        },
        id: {
          name: 'id',
          type: 'any'
        },
        rpgRoleId: {
          name: 'rpgRoleId',
          type: 'any'
        },
        rpgAttributeId: {
          name: 'rpgAttributeId',
          type: 'any'
        },
      },
      relations: {
        rpgRole: {
          name: 'rpgRole',
          type: 'RpgRole',
          model: 'RpgRole'
        },
        rpgAttribute: {
          name: 'rpgAttribute',
          type: 'RpgAttribute',
          model: 'RpgAttribute'
        },
      }
    }
  }
}
