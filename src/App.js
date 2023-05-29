import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import TemporaryDrawer from "./pages/Menu/menu";


function App() {
  return (
    <div className="App">
      <Header />
      <TemporaryDrawer />
      <ListarTarefa />
      <Login />

    </div>
  );
}

export default App;
