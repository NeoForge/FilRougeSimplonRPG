export class PNJ
{
    id : Number;
    name : String;
    image : String;
    Stage : Number;
    Dialog : String;
    Response : String;

    constructor(id : Number, name : String, image : String, Stage : Number, Dialog : String, Response : String)
    {
        this.id = id;
        this.name = name;
        this.image = image;
        this.Stage = Stage;
        this.Dialog = Dialog;
        this.Response = Response;
    }
}