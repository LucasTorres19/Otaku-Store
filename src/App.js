//Librerias
import {Switch,Route} from 'wouter'
//Components
import Login from "./Pages/login.js"
import Home from "./Pages/home.js"
import Register from './Pages/register.js'
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
    </Switch>
  </div>
  );
}

export default App;
