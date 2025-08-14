import { useState, useEffect } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({ nome: "", preco: "", categoria: "" });

  useEffect(() => {
    fetch("http://localhost:5046/produto")
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  const cadastrar = (e) => {
    e.preventDefault();
    fetch("http://localhost:5046/produto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => window.location.reload());
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Cadastro de Produtos</h1>

      <div className="row">
        {/* Formulário */}
        <div className="col-md-4">
          <form className="card p-4 shadow" onSubmit={cadastrar}>
            <h4 className="mb-3">Novo Produto</h4>

            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input className="form-control"
                onChange={e => setForm({ ...form, nome: e.target.value })} />
            </div>

            <div className="mb-3">
              <label className="form-label">Preço</label>
              <input type="decimal" className="form-control"
                onChange={e => setForm({ ...form, preco: parseFloat(e.target.value) })} />
            </div>

            <div className="mb-3">
              <label className="form-label">Categoria</label>
              <input className="form-control"
                onChange={e => setForm({ ...form, categoria: e.target.value })} />
            </div>

            <button type="submit" className="btn btn-primary w-100">Cadastrar</button>
          </form>
        </div>

        {/* Lista */}
        <div className="col-md-8">
          <h4 className="mb-3">Lista de Produtos</h4>
          <table className="table table-striped shadow">
            <thead className="table-dark">
              <tr>
                <th>Nome</th>
                <th>Preço (R$)</th>
                <th>Categoria</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(p => (
                <tr key={p.id}>
                  <td>{p.nome}</td>
                  <td>{p.preco.toFixed(2)}</td>
                  <td>{p.categoria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
