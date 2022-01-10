import { ReplaySubject } from 'rxjs';

interface Data{
    money : number;
}


export class GameManager{
    private static instance : GameManager;

    private DataSubject = new ReplaySubject<Data>(1);
    public readonly Data = this.DataSubject.asObservable();
    name : string = "Salut";
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