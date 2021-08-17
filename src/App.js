
import HomeApi from "./pages/homeApi";
import {BrowserRouter, Route} from  'react-router-dom'
import NovoLivro from "./pages/novoLivro";
import Grid from "./pages/homeApiGrid";

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      <BrowserRouter>
        <Route path="/homeApi" exact component={HomeApi}></Route>
        <Route path="/novoLivro" exact component={NovoLivro}></Route>
        <Route path="/" exact component={Grid}></Route>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
