import {Component, Input} from "@angular/core";
import {RpgPlayerRpgAttribute} from "../../../shared/sdk/models/RpgPlayerRpgAttribute";
@Component({
  moduleId: module.id,
  templateUrl: 'rpg-player-attribute-management.component.html',
  selector: "rpg-player-attribute-management"
})
export class RpgPlayerAttributeManagementComponent {
  @Input() rpgAttributePlayer: RpgPlayerRpgAttribute = new RpgPlayerRpgAttribute;

  changeMore() {
    this.rpgAttributePlayer.value++;
  }

  changeLess() {
    if(this.rpgAttributePlayer.value > 0) {
      this.rpgAttributePlayer.value--;
    }
  }
}
