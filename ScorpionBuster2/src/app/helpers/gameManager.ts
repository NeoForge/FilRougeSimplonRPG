import { ReplaySubject } from 'rxjs';
import { HeroService } from '../apiServices/hero.service';

interface Data {
    id: number;
    name: string;
    hp: number;
    attack: number;
    defense: number;
    xp: number;
    image: string;
    level: number;
    storyStage: number;
    didIDo: string;
    paSion: number;
    credit: number;
    weapon: string;
    armor: string;
}
interface LocalData {
    combatState: string;
    choiceState: number;
    monsterId: number;
    heroId: number;
    playerState: string;
    choice1: string;
    choice2: string;
    choice3: string;

}

export class GameManager {
    private static instance: GameManager;
    heroService: HeroService;

    private DataSubject = new ReplaySubject<Data>(1);
    public readonly Data = this.DataSubject.asObservable();

    private LocalDataSubject = new ReplaySubject<LocalData>(1);
    public readonly LocalData = this.LocalDataSubject.asObservable();

    private constructor(heroService: HeroService) {
        this.heroService = heroService;
    }

    static getInstance(heroService: any, id: number) {

        if (!GameManager.instance) {
            GameManager.instance = new GameManager(heroService);
            this.instance.LocalDataSubject.next({
                combatState: "wait",
                choiceState: 0,
                monsterId: 0,
                heroId: id,
                playerState: "startmenu",
                choice1: "",
                choice2: "",
                choice3: ""
            });
        }
        this.instance.update(id);
        
        return GameManager.instance;
    }

    dispatch(data: Data) {
        this.DataSubject.next(data);
        let temp = data.id
        this.heroService.PutHero(data).subscribe(
            (data: any) => {
                this.update(temp);
            }
        );
    }

    dispatchLocal(LocalData: LocalData) {
        this.LocalDataSubject.next(LocalData);
    }

    update(id: number) {
        this.heroService.GetHeroById(id).subscribe(
            (data: any) => {
                this.DataSubject.next(data);
            }
        );
    }

}