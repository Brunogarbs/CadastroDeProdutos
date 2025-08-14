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
    <div>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={cadastrar}>
        <input placeholder="Produto" onChange={e => setForm({ ...form, nome: e.target.value })} />
        <input placeholder="Preço" type="decimal" onChange={e => setForm({ ...form, preco: parseFloat(e.target.value) })} />
        <input placeholder="Categoria" onChange={e => setForm({ ...form, categoria: e.target.value })} />
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Lista</h2>
      <ul>
        {produtos.map(p => <li key={p.id}>{p.nome} - R${p.preco} - {p.categoria}</li>)}
      </ul>
    </div>
  );
}

export default App;
