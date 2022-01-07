export class Item
    {
        id : number;
        name : string;
        description : string;
        image : string;
        price : number;
        owned : boolean;
        ownedQuantity : number;
        consumable : boolean;

        constructor(id : number, name : string, description : string, image : string, price : number, owned : boolean, ownedQuantity : number, consumable : boolean)
        {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image = image;
            this.price = price;
            this.owned = owned;
            this.ownedQuantity = ownedQuantity;
            this.consumable = consumable;
        }
    }