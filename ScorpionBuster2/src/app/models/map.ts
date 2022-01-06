export class Map
{
    id: Number;
    name: String;
    text: String;
    background: String;
    pnjId: String;
    monsterId: String

    constructor(id: Number, name: String, text: String, background: String, pnjId: String, monsterId: String)
    {
        this.id = id;
        this.name = name;
        this.text = text;
        this.background = background;
        this.pnjId = pnjId;
        this.monsterId = monsterId;
    }
}