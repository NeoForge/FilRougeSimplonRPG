import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { ShopComponent } from './pages/game-bar/options-bar/shop/shop.component';
import { StartScreenComponent } from './pages/start-screen/start-screen.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
