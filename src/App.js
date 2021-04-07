import Cabeza from './components/cabezera.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";

function App() {              
  return (
  <div className="App">
    <Cabeza />
    <Nav />
    <Footer />      
  </div>
  );
}

export default App;
