// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace ScorpionBusterBackEnd.Models
{
    public partial class Hero
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int StoryStage { get; set; }
        public int Hp { get; set; }
        public int Attack { get; set; }
        public int Defense { get; set; }
        public string DidIDo { get; set; }
        public int? PaSion { get; set; }
        public int? Credit { get; set; }
        public int? WeaponId { get; set; }
        public int? ArmorId { get; set; }
    }
}