using ProdutoAPI.DTOs;
using ProdutoAPI.Models;

namespace ProdutoAPI.Services
{
    public interface IProdutoService
    {
        void CadastrarProduto(ProdutoDTO dto);
        IEnumerable<Produto> ListarProdutos();
    }
}
