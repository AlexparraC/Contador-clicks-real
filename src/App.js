import './App.css';
import './componentes/Contador';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoPlatzi from'./imagenes/logoplatzi.png';
import { useState } from 'react';


function App() {

  const [numClics, setnumClics] = useState(0);

    const manejarClic = () =>{
      setnumClics(numClics + 1);
    }

    const reiniciarContador = () =>{
      setnumClics(0);
    }

  return (
    <div className='App'>
      <div className='logo-platzi-contenedor'>
        <img 
        className='logo-platzi'
        src={logoPlatzi}
        alt='logo de platzi' />
      </div>
      <div className='contenedor-principal'>

        <Contador numClics= {numClics} />

        <Boton
        texto='clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
        
      </div>
    </div>
  );
}

export default App;

