import { Component } from '@angular/core';
import {RpgPlayer} from "./shared/sdk/models/RpgPlayer";
import {LoopBackConfig} from "./shared/sdk/lb.config";
import {BASE_URL, API_VERSION} from "./shared/base.url";
import {RpgPlayerApi} from "./shared/sdk/services/custom/RpgPlayer";
import {LoopBackFilter} from "./shared/sdk/models/BaseModels";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{player.firstname}} {{player.lastname}}</h1>`,
})
export class AppComponent  {
  private player    : RpgPlayer = new RpgPlayer();

  constructor(
    private rpgPlayerApi: RpgPlayerApi
  ) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
    this.getPlayer("58973d2c5980aa21f0b74613");
  }

  getPlayer(id: any): void {

    this.rpgPlayerApi.findById(id, {include: {"rpgPlayerRpgRole":"rpgRole"}}).subscribe((player: RpgPlayer) => {
      this.player = player;
    });
  }

}
