import React, {useContext} from 'react';
import { RecetaContext } from '../context/RecetaContext';
import Receta from './Receta';

const ListadoReceta = () => {

    const {recetas} = useContext(RecetaContext)

    return ( 
        <div className="row mt-5">
            {recetas.map(receta=>(
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    );
}
 
export default ListadoReceta;