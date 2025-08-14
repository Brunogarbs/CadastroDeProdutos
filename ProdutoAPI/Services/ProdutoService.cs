using ProdutoAPI.DTOs;
using ProdutoAPI.Models;
using ProdutoAPI.Repositories;

namespace ProdutoAPI.Services
{
    public class ProdutoService : IProdutoService
    {
        private readonly IProdutoRepository _repository;

        public ProdutoService(IProdutoRepository repository)
        {
            _repository = repository;
        }

        public void CadastrarProduto(ProdutoDTO dto)
        {
            var produto = new Produto
            {
                Nome = dto.Nome,
                Preco = dto.Preco,
                Categoria = dto.Categoria
            };

            _repository.Add(produto);
            _repository.SaveChanges();
        }

        public IEnumerable<Produto> ListarProdutos()
        {
            return _repository.GetAll();
        }
    }
}
