/* tslint:disable */
import {
  RpgPlayer,
  RpgAttribute
} from '../index';

declare var Object: any;
export interface RpgPlayerRpgAttributeInterface {
  realValue?: number;
  value?: number;
  id?: any;
  rpgPlayerId?: any;
  rpgAttributeId?: any;
  rpgPlayer?: RpgPlayer;
  rpgAttribute?: RpgAttribute;
}

export class RpgPlayerRpgAttribute implements RpgPlayerRpgAttributeInterface {
  realValue: number;
  value: number;
  id: any;
  rpgPlayerId: any;
  rpgAttributeId: any;
  rpgPlayer: RpgPlayer;
  rpgAttribute: RpgAttribute;
  constructor(data?: RpgPlayerRpgAttributeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgPlayerRpgAttribute`.
   */
  public static getModelName() {
    return "RpgPlayerRpgAttribute";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgPlayerRpgAttribute for dynamic purposes.
  **/
  public static factory(data: RpgPlayerRpgAttributeInterface): RpgPlayerRpgAttribute{
    return new RpgPlayerRpgAttribute(data);
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
      name: 'RpgPlayerRpgAttribute',
      plural: 'RpgPlayerRpgAttributes',
      properties: {
        realValue: {
          name: 'realValue',
          type: 'number'
        },
        value: {
          name: 'value',
          type: 'number'
        },
        id: {
          name: 'id',
          type: 'any'
        },
        rpgPlayerId: {
          name: 'rpgPlayerId',
          type: 'any'
        },
        rpgAttributeId: {
          name: 'rpgAttributeId',
          type: 'any'
        },
      },
      relations: {
        rpgPlayer: {
          name: 'rpgPlayer',
          type: 'RpgPlayer',
          model: 'RpgPlayer'
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
