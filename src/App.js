import React  from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoReceta from './components/ListadoReceta';

import CategoriasProvider  from './context/CategoriasContext';
import RecetaProvider from './context/RecetaContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
   <CategoriasProvider>
     <RecetaProvider>
       <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
            <ListadoReceta />
          </div>
        </ModalProvider>
     </RecetaProvider>
   </CategoriasProvider>
  );
}

export default App;
