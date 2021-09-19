import axios from 'axios';
import React,{ createContext,useState }  from 'react';
import { useEffect } from 'react/cjs/react.development';


export const RecetaContext = createContext();

const RecetaProvider = (props)=>{

    const [recetas, guardarReceta] = useState([])
    const [busquedas, obtenerBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const [consulta, guardarConsulta] = useState(false)

    const {nombre, categoria} = busquedas;

    useEffect(()=>{
        if(consulta){
            const obtenerRecetas = async ()=>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
    
                const resultado = await axios.get(url)
                guardarReceta(resultado.data.drinks)
            }
            obtenerRecetas();
        }
    },[busquedas, nombre, categoria,consulta])

    return(
        <RecetaContext.Provider
            value={{
                recetas,
                obtenerBusqueda,
                guardarConsulta
            }}
        >
            {props.children}
        </RecetaContext.Provider>
    )
}
export default RecetaProvider;