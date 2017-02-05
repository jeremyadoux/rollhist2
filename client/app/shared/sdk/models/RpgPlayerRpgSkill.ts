/* tslint:disable */
import {
  RpgPlayer,
  RpgSkill
} from '../index';

declare var Object: any;
export interface RpgPlayerRpgSkillInterface {
  realValue?: number;
  value?: number;
  id?: any;
  rpgPlayerId?: any;
  rpgSkillId?: any;
  rpgPlayer?: RpgPlayer;
  rpgSkill?: RpgSkill;
}

export class RpgPlayerRpgSkill implements RpgPlayerRpgSkillInterface {
  realValue: number;
  value: number;
  id: any;
  rpgPlayerId: any;
  rpgSkillId: any;
  rpgPlayer: RpgPlayer;
  rpgSkill: RpgSkill;
  constructor(data?: RpgPlayerRpgSkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgPlayerRpgSkill`.
   */
  public static getModelName() {
    return "RpgPlayerRpgSkill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgPlayerRpgSkill for dynamic purposes.
  **/
  public static factory(data: RpgPlayerRpgSkillInterface): RpgPlayerRpgSkill{
    return new RpgPlayerRpgSkill(data);
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
      name: 'RpgPlayerRpgSkill',
      plural: 'RpgPlayerRpgSkills',
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
        rpgSkillId: {
          name: 'rpgSkillId',
          type: 'any'
        },
      },
      relations: {
        rpgPlayer: {
          name: 'rpgPlayer',
          type: 'RpgPlayer',
          model: 'RpgPlayer'
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
