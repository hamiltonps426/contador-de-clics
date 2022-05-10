import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numeroClics, setNumeroClics] = useState(0);

  const clic = () => {
    setNumeroClics(numeroClics + 1);
  };

  const reiniciar = () => {
    setNumeroClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numeroClics={numeroClics} />

        <Boton
          texto={'Clic'}
          esBotonDeClic={true}
          manejarClic={clic}
        />

        <Boton
          texto={'Reiniciar'}
          esBotonDeClic={false}
          manejarClic={reiniciar}
        />
      </div>
    </div>
  );
}

export default App;
