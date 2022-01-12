export class Map
{
    id: Number;
    name: String;
    text: String;
    background: String;
    pnjId: number;
    monsterId: number

    constructor(id: Number, name: String, text: String, background: String, pnjId: number, monsterId: number)
    {
        this.id = id;
        this.name = name;
        this.text = text;
        this.background = background;
        this.pnjId = pnjId;
        this.monsterId = monsterId;
    }
}