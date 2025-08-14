using ProdutoAPI.Data;
using ProdutoAPI.Models;

namespace ProdutoAPI.Repositories
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly AppDbContext _context;

        public ProdutoRepository(AppDbContext context)
        {
            _context = context;
        }

        public void Add(Produto produto)
        {
            _context.Produtos.Add(produto);
        }

        public IEnumerable<Produto> GetAll()
        {
            return _context.Produtos.ToList();
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
