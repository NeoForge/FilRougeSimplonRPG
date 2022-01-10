import { ReplaySubject } from 'rxjs';
import { HeroService } from '../apiServices/hero.service';

interface Data{
    id:number;
    name:string;
    hp:number;
    attack:number;
    defense:number;
    xp:number;
    image:string;
    level:number;
    storyStage:number;
    didIDo:string;
    paSion : number;
    credit : number;
}


export class GameManager{
    private static instance : GameManager;
    heroService : HeroService;
    private DataSubject = new ReplaySubject<Data>(1);
    public readonly Data = this.DataSubject.asObservable();
    private constructor(heroService : HeroService){
        this.heroService = heroService;
    }

    static getInstance(heroService : any,id:number){

        if(!GameManager.instance){
            GameManager.instance = new GameManager(heroService);
        }
        this.instance.update(id);
        return GameManager.instance;
    }

    dispatch(data:Data){
        this.DataSubject.next(data);
        this.heroService.PutHero(data).subscribe(
            (data: any) => {
                this.update(data.id)
            }
        );
    }

    update(id:number)
    {
        this.heroService.GetHeroById(id).subscribe(
            (data: any) => {
                this.DataSubject.next(data);
            }
        );
    }

}