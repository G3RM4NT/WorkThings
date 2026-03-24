using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private static List<Employee> employees = new();

        [HttpGet]
        public IActionResult Get() => Ok(employees);

        [HttpPost]
        public IActionResult Post(Employee emp)
        {
            emp.id = employees.Count + 1;
            employees.Add(emp);
            return Ok(emp);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var emp = employees.FirstOrDefault(x => x.id == id);
            if (emp == null) return NotFound();

            employees.Remove(emp);
            return Ok();
        }
    }
}