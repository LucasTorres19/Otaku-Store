import { Switch , Route } from 'wouter'
import Login from './Pages/login.js'
import Home from './Pages/home.js'
import Register from './Pages/register.js'
import Product from './Pages/producto.js'
import ProductsList from './Pages/products_List.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';
import './assets/Css/app.css';

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
      <Route path="/producto/:id">
        {(params) => <Product  id={params.id}/>}
      </Route>
      
      <Route path="/:type/:cat">
      {(params) => <ProductsList type={params.type} cat={params.cat}/>}
      </Route>

      <Route path="/:type">
      {(params) => <ProductsList type={params.type} cat="null"/>}
      </Route>
     
    </Switch>
  </div>
  );
}

export default App;
