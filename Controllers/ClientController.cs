using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ClientController : ControllerBase
{
    private readonly AppDbContext _context;

    public ClientController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.Clientes.ToList());
    }

    [HttpPost]
    public IActionResult Post(Clients cli)
    {
        _context.Clientes.Add(cli);
        _context.SaveChanges();
        return Ok(cli);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var cli = _context.Clientes.Find(id);
        if (cli == null) return NotFound();

        _context.Clientes.Remove(cli);
        _context.SaveChanges();
        _context.SaveChanges();
        return Ok();
    }

    [HttpPut("{id}")]
    public IActionResult Put(int id, Clients cli)
    {
        var client = _context.Clientes.Find(id);
        if (client == null) return NotFound();

        cli.id = id; 
        _context.Entry(client).CurrentValues.SetValues(cli);
        _context.SaveChanges();
        return Ok(cli);
    }


}