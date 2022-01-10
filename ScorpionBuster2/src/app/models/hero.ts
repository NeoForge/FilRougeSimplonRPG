export class Hero
{
    id:number;
    name:string;
    hp:number;
    attack:number;
    defense:number;
    image:string;
    storyStage:number;
    didIDo:string;
    paSion : number;
    credit : number;
    
    constructor(id:number,name:string,hp:number,attack:number,defense:number,image:string,storyStage:number,didIDo:string,paSion:number,credit:number){
        this.id=id;
        this.name=name;
        this.hp=hp;
        this.attack=attack;
        this.defense=defense;
        this.image=image;
        this.storyStage=storyStage;
        this.didIDo=didIDo;
        this.paSion=paSion;
        this.credit=credit;
    }
}