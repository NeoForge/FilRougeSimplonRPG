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
    private DataSubject = new ReplaySubject<Data>(1);
    public readonly Data = this.DataSubject.asObservable();
    private constructor(){}

    static getInstance(){
        if(!GameManager.instance){
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    dispatch(data:Data){
        this.DataSubject.next(data);
    }

}