//Librerias
import {Switch,Route} from 'wouter'
//Components
import Login from "./Pages/login.js"
import Home from "./Pages/home.js"

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
      </Route>
    </Switch>
  </div>
 
  );
}

export default App;
