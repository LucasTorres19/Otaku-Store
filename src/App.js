//Librerias
import {Switch,Route} from 'wouter'
//Components
import Login from "./components/login.js"
import Home from "./components/home.js"

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
    </Switch>
  </div>
 
  );
}

export default App;
