import "./App.scss";
import Logo from './components/media/images/logo.png';
import Radio from "./components/Radio";
import Footer from "./components/footer/footer";

function App() {

  return (
    <div className="App">
     <img src={Logo} alt='Logo' />
      <h1> RadiOn By NeighborDev CR</h1>
      <h2>Elige un genero, escoge una estacion y comienza a escuchar y disfrutar!👽</h2>
      <Radio />
      <Footer />
    </div>
  );
}

export default App;
