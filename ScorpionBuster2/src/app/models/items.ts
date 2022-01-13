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
        isBuyable : boolean;
        isEquipped : boolean;
        itemType : string;
        statValue : number;

        constructor(id : number, name : string, description : string, image : string, price : number, owned : boolean, ownedQuantity : number, consumable : boolean, isBuyable : boolean, isEquipped : boolean, itemType : string, statValue : number)
        {
            this.id = id;
            this.name = name;
            this.description = description;
            this.image = image;
            this.price = price;
            this.owned = owned;
            this.ownedQuantity = ownedQuantity;
            this.consumable = consumable;
            this.isBuyable = isBuyable;
            this.isEquipped = isEquipped;
            this.itemType = itemType;
            this.statValue = statValue;
        }
    }