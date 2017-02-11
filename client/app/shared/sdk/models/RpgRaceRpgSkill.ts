/* tslint:disable */
import {
  RpgRace,
  RpgSkill
} from '../index';

declare var Object: any;
export interface RpgRaceRpgSkillInterface {
  modif?: number;
  id?: any;
  rpgRaceId?: any;
  rpgSkillId?: any;
  rpgRace?: RpgRace;
  rpgSkill?: RpgSkill;
}

export class RpgRaceRpgSkill implements RpgRaceRpgSkillInterface {
  modif: number;
  id: any;
  rpgRaceId: any;
  rpgSkillId: any;
  rpgRace: RpgRace;
  rpgSkill: RpgSkill;
  constructor(data?: RpgRaceRpgSkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RpgRaceRpgSkill`.
   */
  public static getModelName() {
    return "RpgRaceRpgSkill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RpgRaceRpgSkill for dynamic purposes.
  **/
  public static factory(data: RpgRaceRpgSkillInterface): RpgRaceRpgSkill{
    return new RpgRaceRpgSkill(data);
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
      name: 'RpgRaceRpgSkill',
      plural: 'RpgRaceRpgSkills',
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
        rpgSkillId: {
          name: 'rpgSkillId',
          type: 'any'
        },
      },
      relations: {
        rpgRace: {
          name: 'rpgRace',
          type: 'RpgRace',
          model: 'RpgRace'
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
