import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastInstructions() {

  const showToast = () => {
    toast("Recuerda usar una estacion a la vez. Elige un genero, sintoniza una estacion, escucha Y disfruta!👽📻📡")
  };

  return (
    <div className="App">
      <div>
        <button
         style={{background: 'linear-gradient(#00DFD8, #007CF0)', color: 'white',
         border: "1px dashed purple",  padding: '10px', marginBottom: '15px', 
         opacity: '0.8',
         transform: 'translateX(-180%)', borderRadius: "50%"}}
         onClick={showToast}>Instrucciones
         </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ToastInstructions;