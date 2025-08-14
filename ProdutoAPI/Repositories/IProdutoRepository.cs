using ProdutoAPI.Models;

namespace ProdutoAPI.Repositories
{
    public interface IProdutoRepository
    {
        void Add(Produto produto);
        IEnumerable<Produto> GetAll();
        void SaveChanges();
    }
}
