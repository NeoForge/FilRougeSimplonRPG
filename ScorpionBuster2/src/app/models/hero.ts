export class Hero
{
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
    
    constructor(id:number,name:string,hp:number,attack:number,defense:number,xp:number,image:string,level:number,storyStage:number,didIDo:string,paSion:number,credit:number){
        this.id=id;
        this.name=name;
        this.hp=hp;
        this.attack=attack;
        this.defense=defense;
        this.xp=xp;
        this.image=image;
        this.level=level;
        this.storyStage=storyStage;
        this.didIDo=didIDo;
        this.paSion=paSion;
        this.credit=credit;
    }
}