import "./App.scss";
import Logo from './components/media/images/logo.png';
import Radio from "./components/Radio";
import Footer from "./components/footer/footer";

function App() {

  return (
    <div className="App">
     <img src={Logo} alt='Logo' />
      <h2>Elige un genero, sintoniza una estacion, escucha Y disfruta!👽📻📡</h2>
      <h4> Recuerda usar una estacion a la vez</h4>
      <Radio />
      <Footer />
    </div>
  );
}

export default App;


