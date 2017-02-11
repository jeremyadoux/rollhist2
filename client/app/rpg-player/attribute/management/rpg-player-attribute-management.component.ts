import {Component, Input} from "@angular/core";
import {RpgPlayerRpgAttribute} from "../../../shared/sdk/models/RpgPlayerRpgAttribute";
import {RpgPlayer} from "../../../shared/sdk/models/RpgPlayer";
import {RpgAttribute} from "../../../shared/sdk/models/RpgAttribute";
import {RpgRoleRpgAttribute} from "../../../shared/sdk/models/RpgRoleRpgAttribute";
@Component({
  moduleId: module.id,
  templateUrl: 'rpg-player-attribute-management.component.html',
  selector: "rpg-player-attribute-management"
})
export class RpgPlayerAttributeManagementComponent {
  @Input() rpgAttributePlayer: RpgPlayerRpgAttribute = new RpgPlayerRpgAttribute;
  @Input() rpgPlayer: RpgPlayer = new RpgPlayer;

  changeMore() {
    this.rpgAttributePlayer.value++;
  }

  changeLess() {
    if(this.rpgAttributePlayer.value > 0) {
      this.rpgAttributePlayer.value--;
    }
  }

  getBonus(): number {
    var bonus: number = 0;

    //noinspection TypeScriptUnresolvedVariable
    for (let entry of this.rpgPlayer.rpgPlayerRpgRole[0].rpgRoleRpgAttributes) {
      if(entry.rpgAttribute.id == this.rpgAttributePlayer.rpgAttribute.id) {
        bonus += entry.modif;
      }
    }
    return bonus;
  }
}
