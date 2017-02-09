import {Component, OnInit, Input, trigger, state, style, transition, animate} from "@angular/core";
import {RpgBoardApi} from "../../shared/sdk/services/custom/RpgBoard";
import {RpgRoleApi} from "../../shared/sdk/services/custom/RpgRole";
import {RpgBoard} from "../../shared/sdk/models/RpgBoard";
import {RpgRole} from "../../shared/sdk/models/RpgRole";
import {RpgAttribute} from "../../shared/sdk/models/RpgAttribute";
import {RpgSkill} from "../../shared/sdk/models/RpgSkill";
import {RpgPlayer} from "../../shared/sdk/models/RpgPlayer";
import {RpgPlayerRpgRole} from "../../shared/sdk/models/RpgPlayerRpgRole";
import {RpgPlayerRpgAttribute} from "../../shared/sdk/models/RpgPlayerRpgAttribute";
import {RpgPlayerApi} from "../../shared/sdk/services/custom/RpgPlayer";
import {RpgPlayerRpgSkill} from "../../shared/sdk/models/RpgPlayerRpgSkill";

@Component({
  moduleId: module.id,
  templateUrl: 'rpg-player-form.component.html',
  selector: 'rpg-player-form',
  animations: [
    trigger('switchAnimation', [
      state('fadeIn', style({
        opacity: '1'
      })),
      transition('void => *', [style({opacity: '0'}), animate('500ms')])
    ])
  ]
})
export class RpgPlayerFormComponent implements OnInit{
  @Input() rpgBoard: RpgBoard = new RpgBoard;
  public rpgRoles: RpgRole[] = [];
  public rpgAttributes: RpgAttribute[] = [];
  public rpgSkills: RpgSkill[] = [];
  public rpgPlayer : RpgPlayer = new RpgPlayer;
  public panelValue: number = 0;

  constructor(private rpgBoardApi: RpgBoardApi, private rpgPlayerApi: RpgPlayerApi) {

  }

  ngOnInit() {
    Promise.all([
      this.getRoles(),
      this.getAttributes(),
      this.getSkills()
    ]).then(() => {
      this.prepareRpgPlayer();
    });
  }

  getRoles() {
    return new Promise((resolve, reject) => {
      this.rpgBoardApi.getRpgRoles(this.rpgBoard.id).subscribe((data: RpgRole[]) => {
        this.rpgRoles = data;
        resolve();
      })
    });
  }

  getAttributes() {
    return new Promise((resolve, reject) => {
      this.rpgBoardApi.getRpgAttributes(this.rpgBoard.id).subscribe((data: RpgAttribute[]) => {
        this.rpgAttributes = data;
        resolve();
      })
    });
  }

  getSkills() {
    return new Promise((resolve, reject) => {
      this.rpgBoardApi.getRpgSkills(this.rpgBoard.id).subscribe((data: RpgSkill[]) => {
        this.rpgSkills = data;
        resolve();
      })
    });
  }

  prepareRpgPlayer() {
    this.rpgPlayer = new RpgPlayer();
    this.rpgPlayer.rpgBoard = this.rpgBoard;
    this.rpgPlayer.rpgPlayerRpgRole = [new RpgPlayerRpgRole];
    this.rpgPlayer.rpgPlayerRpgAttribute = [];
    this.rpgPlayer.rpgPlayerRpgSkill = [];

    let rpgPlayerRpgAttribute : RpgPlayerRpgAttribute;
    for ( let entry: RpgAttribute of this.rpgAttributes) {
      rpgPlayerRpgAttribute = new RpgPlayerRpgAttribute;
      rpgPlayerRpgAttribute.value = 10;
      rpgPlayerRpgAttribute.rpgAttribute = entry;
      this.rpgPlayer.rpgPlayerRpgAttribute.push(rpgPlayerRpgAttribute);
    }

    let rpgPlayerRpgSkill : RpgPlayerRpgSkill;
    for ( let entry: RpgSkill of this.rpgSkills) {
      rpgPlayerRpgSkill = new RpgPlayerRpgSkill;
      rpgPlayerRpgSkill.value = 10;
      rpgPlayerRpgSkill.rpgSkill = entry;
      this.rpgPlayer.rpgPlayerRpgSkill.push(rpgPlayerRpgSkill);
    }
  }

  savePlayerAction() {
    this.rpgPlayerApi.create(this.rpgPlayer).subscribe((data: RpgPlayer) => {
      this.rpgPlayerApi.createManyRpgPlayerRpgRole(data.id, this.rpgPlayer.rpgPlayerRpgRole).subscribe();
      this.rpgPlayerApi.createManyRpgPlayerRpgAttribute(data.id, this.rpgPlayer.rpgPlayerRpgAttribute).subscribe();
      this.rpgPlayerApi.createManyRpgPlayerRpgSkill(data.id, this.rpgPlayer.rpgPlayerRpgSkill).subscribe();
    });
  }

  switchChange(checked: boolean, number: number) {
    if(checked) {
      this.panelValue = number;
    } else {
      this.panelValue = 0;
    }
  }
}
