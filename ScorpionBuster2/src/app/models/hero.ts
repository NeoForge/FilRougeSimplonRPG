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
    constructor(id:number,name:string,hp:number,attack:number,defense:number,xp:number,image:string,level:number,storyStage:number,didIDo:string){
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
    }
}