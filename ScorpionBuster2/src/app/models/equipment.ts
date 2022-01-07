export class Equipment
{
    id : Number;
    name : String;
    description : String;
    equipped : Boolean;
    type : String;
    statValue : Number;
    owned : Boolean;

    constructor(id : Number, name : String, description : String, type : String, statValue : Number, owned : Boolean, equipped : Boolean)
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.statValue = statValue;
        this.owned = owned;
        this.equipped = equipped;
    }
}