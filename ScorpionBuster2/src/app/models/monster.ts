export class Monster{
    id:number;
    name:string;
    hp:number;
    attack:number;
    defense:number;
    image:string;
    itemId:number;
    constructor(id:number,name:string,hp:number,attack:number,defense:number,image:string,itemId:number){
        this.id=id;
        this.name=name;
        this.hp=hp;
        this.attack=attack;
        this.defense=defense;
        this.image=image;
        this.itemId=itemId;
    }
}