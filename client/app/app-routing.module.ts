
import {RpgBoardListComponent} from "./rpg-board/list/rpg-board-list.component";
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RpgBoardDetailComponent} from "./rpg-board/detail/rpg-board-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/boards', pathMatch: 'full' },
  { path: 'boards',  component: RpgBoardListComponent },
  { path: 'board/:id', component: RpgBoardDetailComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
