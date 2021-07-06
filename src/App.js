//Librerias
import {Switch,Route} from 'wouter'
//Paginas
import Login from './Pages/login.js'
import Home from './Pages/home.js'
import Register from './Pages/register.js'
import Producto from './Pages/producto.js'
//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';
import './assets/Css/Index.css';

function App() {              
  
return (
  
  <div className="App">
    <Switch>    
      <Route path="/">
        <Home /> 
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/producto">
        <Producto />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
