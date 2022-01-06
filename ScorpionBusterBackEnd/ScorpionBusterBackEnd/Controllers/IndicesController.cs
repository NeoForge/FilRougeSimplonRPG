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
    public class IndicesController : ControllerBase
    {
        private readonly Scorpionbuster2Context _context;

        public IndicesController(Scorpionbuster2Context context)
        {
            _context = context;
        }

        // GET: api/Indices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Indice>>> GetIndices()
        {
            return await _context.Indices.ToListAsync();
        }

        // GET: api/Indices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Indice>> GetIndice(int id)
        {
            var indice = await _context.Indices.FindAsync(id);

            if (indice == null)
            {
                return NotFound();
            }

            return indice;
        }

        // PUT: api/Indices/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIndice(int id, Indice indice)
        {
            if (id != indice.Id)
            {
                return BadRequest();
            }

            _context.Entry(indice).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IndiceExists(id))
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

        // POST: api/Indices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Indice>> PostIndice(Indice indice)
        {
            _context.Indices.Add(indice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIndice", new { id = indice.Id }, indice);
        }

        // DELETE: api/Indices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIndice(int id)
        {
            var indice = await _context.Indices.FindAsync(id);
            if (indice == null)
            {
                return NotFound();
            }

            _context.Indices.Remove(indice);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IndiceExists(int id)
        {
            return _context.Indices.Any(e => e.Id == id);
        }
    }
}
