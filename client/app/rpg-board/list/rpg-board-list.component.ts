
import {Component, OnInit} from "@angular/core";
import {RpgBoard} from "../../shared/sdk/models/RpgBoard";
import {RpgBoardApi} from "../../shared/sdk/services/custom/RpgBoard";
import {LoopBackConfig} from "../../shared/sdk/lb.config";
import {BASE_URL, API_VERSION} from "../../shared/base.url";
@Component(
  {
    moduleId: module.id,
    templateUrl: 'rpg-board-list.component.html',
    styleUrls: ['rpg-board-list.component.css']
  }
)
export class RpgBoardListComponent implements OnInit {

  rpgBoardList: RpgBoard[] = [];

  constructor(private rpgBoardApi: RpgBoardApi) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit() {
    this.getRpgBoard();
  }

  getRpgBoard() {
    //noinspection TypeScriptValidateTypes
    this.rpgBoardApi.find().subscribe((data: RpgBoard[]) => {
      this.rpgBoardList = data;
    })
  }
}
