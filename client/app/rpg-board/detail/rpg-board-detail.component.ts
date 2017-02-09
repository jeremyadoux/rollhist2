/**
 * Created by jadoux on 08/02/2017.
 */

import {Component, OnInit} from "@angular/core";
import {RpgBoardApi} from "../../shared/sdk/services/custom/RpgBoard";
import {RpgBoard} from "../../shared/sdk/models/RpgBoard";
import {LoopBackConfig} from "../../shared/sdk/lb.config";
import {BASE_URL, API_VERSION} from "../../shared/base.url";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  templateUrl: "rpg-board-detail.component.html"
})
export class RpgBoardDetailComponent implements OnInit{
  public rpgBoard: RpgBoard = new RpgBoard;

  constructor(private rpgBoardApi: RpgBoardApi, private route: ActivatedRoute) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.rpgBoardApi.findById(params['id']))
      .subscribe((data: RpgBoard) => {
        this.rpgBoard = data;
      });
  }
}
