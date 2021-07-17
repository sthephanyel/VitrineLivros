import Home from "./pages/home";
import HomeApi from "./pages/homeApi";
import {BrowserRouter, Route} from  'react-router-dom'
import NovoLivro from "./pages/novoLivro";

function App() {
  return (
    <div>
      {/* <Home></Home> */}

      <BrowserRouter>
        <Route path="/" exact component={HomeApi}></Route>
        <Route path="/novoLivro" exact component={NovoLivro}></Route>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
