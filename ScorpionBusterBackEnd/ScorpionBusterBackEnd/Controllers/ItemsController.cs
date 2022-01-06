﻿#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        // GET: api/Items/Inventory
        [HttpGet("Consomable")]
        public async Task<ActionResult<IEnumerable<GetConsomableResult>>> GetConsomable()
        {
            return await _context.GetProcedures().GetConsomableAsync();
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

        private bool ItemExists(int id)
        {
            return _context.Items.Any(e => e.Id == id);
        }
    }
}
