﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ScorpionBusterBackEnd.Models
{
    public partial class GetConsumableResult
    {
        public int id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string image { get; set; }
        public int price { get; set; }
        public bool owned { get; set; }
        public int owned_quantity { get; set; }
        public bool consumable { get; set; }

    }
}
