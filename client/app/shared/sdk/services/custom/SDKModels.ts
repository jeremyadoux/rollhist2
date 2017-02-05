/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { RpgBoard } from '../../models/RpgBoard';
import { RpgAttribute } from '../../models/RpgAttribute';
import { RpgSkill } from '../../models/RpgSkill';
import { RpgRole } from '../../models/RpgRole';
import { RpgPlayer } from '../../models/RpgPlayer';
import { RpgPlayerRpgRole } from '../../models/RpgPlayerRpgRole';
import { RpgPlayerRpgAttribute } from '../../models/RpgPlayerRpgAttribute';
import { RpgPlayerRpgSkill } from '../../models/RpgPlayerRpgSkill';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    RpgBoard: RpgBoard,
    RpgAttribute: RpgAttribute,
    RpgSkill: RpgSkill,
    RpgRole: RpgRole,
    RpgPlayer: RpgPlayer,
    RpgPlayerRpgRole: RpgPlayerRpgRole,
    RpgPlayerRpgAttribute: RpgPlayerRpgAttribute,
    RpgPlayerRpgSkill: RpgPlayerRpgSkill,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
