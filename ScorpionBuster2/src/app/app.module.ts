import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartScreenComponent } from './pages/start-screen/start-screen.component';
import { InventoryComponent } from './pages/game-bar/options-bar/inventory/inventory.component';
import { ShopComponent } from './pages/game-bar/options-bar/shop/shop.component';
import { GameComponent } from './pages/game/game.component';
import { MapComponent } from './pages/map/map.component';
import { FightComponent } from './pages/fight/fight.component';
import { GameOverComponent } from './pages/game-over/game-over.component';
import { GameBarComponent } from './pages/game-bar/game-bar.component';
import { ChoicesComponent } from './pages/game-bar/choices/choices.component';
import { HeroComponent } from './pages/game-bar/hero/hero.component';
import { OptionsBarComponent } from './pages/game-bar/options-bar/options-bar.component';
import { StatisticsBarComponent } from './pages/game-bar/statistics-bar/statistics-bar.component';
import { ItemsShopComponent } from './pages/game-bar/options-bar/shop/items-shop/items-shop.component';
import { OptionsComponent } from './pages/game-bar/options-bar/options/options.component';
import { DialogueComponent } from './pages/dialogue/dialogue.component';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    InventoryComponent,
    ShopComponent,
    GameComponent,
    MapComponent,
    FightComponent,
    GameOverComponent,
    GameBarComponent,
    ChoicesComponent,
    HeroComponent,
    OptionsBarComponent,
    StatisticsBarComponent,
    ItemsShopComponent,
    OptionsComponent,
    DialogueComponent
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
