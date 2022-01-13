export class PNJ
{
    id : Number;
    name : String;
    image : String;
    Stage : Number;
    Dialog : String;
    Response : String;
    itemId : Number;
    monsterId : Number;

    constructor(id : Number, name : String, image : String, Stage : Number, Dialog : String, Response : String, itemId : Number, monsterId : Number)
    {
        this.id = id;
        this.name = name;
        this.image = image;
        this.Stage = Stage;
        this.Dialog = Dialog;
        this.Response = Response;
        this.itemId = itemId;
        this.monsterId = monsterId;
    }
}