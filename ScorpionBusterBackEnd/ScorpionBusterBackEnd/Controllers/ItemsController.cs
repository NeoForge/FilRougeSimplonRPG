#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ScorpionBusterBackEnd.Data;
using ScorpionBusterBackEnd.Models;

namespace ScorpionBusterBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly Scorpionbuster2Context _context;

        public ItemsController(Scorpionbuster2Context context)
        {
            _context = context;
        }

        // GET: api/Items
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            return await _context.Items.ToListAsync();
        }
        // GET: api/Items/Inventory
        [HttpGet("Inventory")]
        public async Task<ActionResult<IEnumerable<GetInventoryResult>>> GetInventory()
        {
            return await _context.GetProcedures().GetInventoryAsync();
        }
        // GET: api/Items/Shop
        [HttpGet("Shop")]
        public async Task<ActionResult<IEnumerable<GetShopResult>>> GetShop()
        {
            return await _context.GetProcedures().GetShopAsync();
        }
        // GET: api/Items/Consommable
        [HttpGet("Consumable")]
        public async Task<ActionResult<IEnumerable<GetConsumableResult>>> GetConsumable()
        {
            return await _context.GetProcedures().GetConsumableAsync();
        }
      
        // GET: api/Items/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(int id)
        {
            var item = await _context.Items.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        // PUT: api/Items/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItem(int id, Item item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Items
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Item>> PostItem(Item item)
        {
            _context.Items.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItem", new { id = item.Id }, item);
        }

        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Items.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        //GET : api/weaponEquip/5
        [HttpGet("weaponEquip/{id}")]
        public async Task<ActionResult<int>> SetWeaponEquip(int id)
        {
            return await _context.GetProcedures().EquipWeaponAsync(id);
        }
        //GET : api/armorEquip/5
        [HttpGet("armorEquip/{id}")]
        public async Task<ActionResult<int>> SetArmorEquip(int id)
        {
            return await _context.GetProcedures().EquipArmorAsync(id);
        }
        //GET : api/armorUnequip
        [HttpGet("armorUnequip")]
        public async Task<ActionResult<int>> UnequipArmor()
        {
            return await _context.GetProcedures().UnequipArmorAsync();
        }
        //GET : api/weaponUnequip
        [HttpGet("weaponUnequip")]
        public async Task<ActionResult<int>> weaponUnequip()
        {
            return await _context.GetProcedures().UnequipWeaponAsync();
        }

        //GET : api/addToInventory/5
        [HttpGet("addToInventory/{id}")]
        public async Task<ActionResult<int>> AddToInventory(int id)
        {
            return await _context.GetProcedures().AddToInventoryAsync(id);
        }

        private bool ItemExists(int id)
        {
            return _context.Items.Any(e => e.Id == id);
        }
    }
}
