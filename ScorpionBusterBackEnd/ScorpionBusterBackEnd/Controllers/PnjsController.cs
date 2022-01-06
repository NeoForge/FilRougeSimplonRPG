#nullable disable
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
    public class PnjsController : ControllerBase
    {
        private readonly Scorpionbuster2Context _context;

        public PnjsController(Scorpionbuster2Context context)
        {
            _context = context;
        }

        // GET: api/Pnjs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pnj>>> GetPnjs()
        {
            return await _context.Pnjs.ToListAsync();
        }

        // GET: api/Pnjs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pnj>> GetPnj(int id)
        {
            var pnj = await _context.Pnjs.FindAsync(id);

            if (pnj == null)
            {
                return NotFound();
            }

            return pnj;
        }

        // PUT: api/Pnjs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPnj(int id, Pnj pnj)
        {
            if (id != pnj.Id)
            {
                return BadRequest();
            }

            _context.Entry(pnj).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PnjExists(id))
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

        // POST: api/Pnjs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pnj>> PostPnj(Pnj pnj)
        {
            _context.Pnjs.Add(pnj);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPnj", new { id = pnj.Id }, pnj);
        }

        // DELETE: api/Pnjs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePnj(int id)
        {
            var pnj = await _context.Pnjs.FindAsync(id);
            if (pnj == null)
            {
                return NotFound();
            }

            _context.Pnjs.Remove(pnj);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PnjExists(int id)
        {
            return _context.Pnjs.Any(e => e.Id == id);
        }
    }
}
