export class Item
    {
        id : number;
        name : string;
        description : string;
        image : string;
        price : number;
        owned : boolean;
        ownedQuantity : number;
        consommable : boolean;

        constructor(id : number, name : string, description : string, image : string, price : number, owned : boolean, ownedQuantity : number, consommable : boolean)
        {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image = image;
            this.price = price;
            this.owned = owned;
            this.ownedQuantity = ownedQuantity;
            this.consommable = consommable;
        }
    }