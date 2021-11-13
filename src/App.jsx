import "./App.scss";
import Logo from './components/media/images/logo.png';
import Footer from "./components/footer/footer";
import GenderCollapsible from "./components/collapsible/GenderCollapsible";
import ToastInstructions from "./components/toast/ToastIns";

function App() {

  return (
    <div className="App">
     <img src={Logo} alt='Logo' />
      <ToastInstructions/>
      <GenderCollapsible/>
      <Footer />
    </div>
  );
}

export default App;


