// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace ScorpionBusterBackEnd.Models
{
    public partial class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int Price { get; set; }
        public bool Owned { get; set; }
        public bool Consumable { get; set; }
        public bool? IsBuyable { get; set; }
        public bool? IsEquipped { get; set; }
        public string ItemType { get; set; }
        public int? StatValue { get; set; }
        public int? Quantity { get; set; }
    }
}