/* tslint:disable */
import {
  RpgRace,
  RpgAttribute
} from '../index';

declare var Object: any;
export interface RpgRaceRpgAttributeInterface {
  modif?: number;
  id?: any;
  rpgRaceId?: any;
  rpgAttributeId?: any;
  rpgRace?: RpgRace;
  rpgAttribute?: RpgAttribute;
}

export class RpgRaceRpgAttribute implements RpgRaceRpgAttributeInterface {
  modif: number;
  id: any;
  rpgRaceId: any;
  rpgAttributeId: any;
  rpgRace: RpgRace;
  rpgAttribute: RpgAttribute;
  constructor(data?: RpgRaceRpgAttributeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgRaceRpgAttribute`.
   */
  public static getModelName() {
    return "RpgRaceRpgAttribute";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgRaceRpgAttribute for dynamic purposes.
  **/
  public static factory(data: RpgRaceRpgAttributeInterface): RpgRaceRpgAttribute{
    return new RpgRaceRpgAttribute(data);
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
      name: 'RpgRaceRpgAttribute',
      plural: 'RpgRaceRpgAttributes',
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
        rpgRaceId: {
          name: 'rpgRaceId',
          type: 'any'
        },
        rpgAttributeId: {
          name: 'rpgAttributeId',
          type: 'any'
        },
      },
      relations: {
        rpgRace: {
          name: 'rpgRace',
          type: 'RpgRace',
          model: 'RpgRace'
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
