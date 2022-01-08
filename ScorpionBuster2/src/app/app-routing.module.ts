import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { StartScreenComponent } from './pages/start-screen/start-screen.component';
import { MapComponent } from './pages/map/map.component';
import { GameOverComponent } from './pages/game-over/game-over.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game', component: GameComponent },
  { path: 'map', component: MapComponent},
  { path: 'game-over', component: GameOverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
