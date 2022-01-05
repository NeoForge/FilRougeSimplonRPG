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
    public class AvailableCharactersController : ControllerBase
    {
        private readonly Scorpionbuster2Context _context;

        public AvailableCharactersController(Scorpionbuster2Context context)
        {
            _context = context;
        }

        // GET: api/AvailableCharacters
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AvailableCharacter>>> GetAvailableCharacters()
        {
            return await _context.AvailableCharacters.ToListAsync();
        }

        // GET: api/AvailableCharacters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AvailableCharacter>> GetAvailableCharacter(int id)
        {
            var availableCharacter = await _context.AvailableCharacters.FindAsync(id);

            if (availableCharacter == null)
            {
                return NotFound();
            }

            return availableCharacter;
        }

        // PUT: api/AvailableCharacters/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAvailableCharacter(int id, AvailableCharacter availableCharacter)
        {
            if (id != availableCharacter.Id)
            {
                return BadRequest();
            }

            _context.Entry(availableCharacter).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvailableCharacterExists(id))
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

        // POST: api/AvailableCharacters
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AvailableCharacter>> PostAvailableCharacter(AvailableCharacter availableCharacter)
        {
            _context.AvailableCharacters.Add(availableCharacter);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AvailableCharacterExists(availableCharacter.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAvailableCharacter", new { id = availableCharacter.Id }, availableCharacter);
        }

        // DELETE: api/AvailableCharacters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAvailableCharacter(int id)
        {
            var availableCharacter = await _context.AvailableCharacters.FindAsync(id);
            if (availableCharacter == null)
            {
                return NotFound();
            }

            _context.AvailableCharacters.Remove(availableCharacter);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AvailableCharacterExists(int id)
        {
            return _context.AvailableCharacters.Any(e => e.Id == id);
        }
    }
}
