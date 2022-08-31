import Book from "./components/Book";

function App() {
  let Livros = [
    {id: 1, title: 'senhor dos aneis'},
    {id: 2,title: 'o poderoso chefao'},
    {id: 3,title: 'carrie, a estranha'},
    {id: 4,title: 'alien'},
  ];

  return (
    <div>
      <h1>Livros</h1>
      <div>
      {Livros.map(i => <Book key={i.id} id={i.id} title={i.title}/>)}
      </div>
    </div>
  );
}

export default App;
