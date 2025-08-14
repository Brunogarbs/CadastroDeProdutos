using Microsoft.AspNetCore.Mvc;
using ProdutoAPI.DTOs;
using ProdutoAPI.Services;

namespace ProdutoAPI.Controllers
{
    [ApiController]
    [Route("produto")]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoService _service;

        public ProdutoController(IProdutoService service)
        {
            _service = service;
        }

        [HttpPost]
        public IActionResult Post([FromBody] ProdutoDTO dto)
        {
            _service.CadastrarProduto(dto);
            return Created("", dto);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_service.ListarProdutos());
        }
    }
}
