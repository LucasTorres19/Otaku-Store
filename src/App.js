import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';
import "./assets/Css/app.css"
//Components
import Cabeza from './components/cabezera.js';
import Footer from "./components/footer.js";
import Nav from "./components/nav.js";
import Carrusel from "./components/carrusel.js";
import CarruselCartas from "./components/card_carrusel.js"
import Gifbox from "./components/gifbox.js"
import Cards from "./components/cards.js"

function App() {              
  return (
  <div className="App">
    <Cabeza />
    <Nav />
    <Carrusel />
   <CarruselCartas title="Novedades"/>
   <div className="gifbox_conteiner">
      <Gifbox title="Comics" gif="https://i.pinimg.com/originals/c0/2f/af/c02faf5610752ab14459b8ba60136a56.gif" />
      <Gifbox title="Manga" gif="https://i.imgur.com/4QAxr2C.gif" />
      <Gifbox title="Yu-Gi-Oh" gif="https://img.unocero.com/2019/02/yu-gi-oh-nintendo-switch.gif"/>   
   </div>
   <CarruselCartas title="Libros" />
    <Footer />      
  </div>
  );
}

export default App;
