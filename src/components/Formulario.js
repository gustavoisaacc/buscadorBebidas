import React, {useContext,useState} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetaContext } from '../context/RecetaContext';


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const {categorias} = useContext(CategoriasContext);
    const {obtenerBusqueda,guardarConsulta} = useContext(RecetaContext);


    const {nombre, categoria} = busqueda;

    const obtenerCategorias = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    return ( 
        <form
            className="col-md-12"
            onSubmit={ e=> {
                e.preventDefault()
                obtenerBusqueda(busqueda)
                guardarConsulta(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categotia o Ingredientes</legend>
            </fieldset>
            <div className="row mt-5">
                <div className="col-md-4">
                    <input
                        type="text" 
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerCategorias}
                        value={nombre}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        name="categoria"
                        className="form-control"
                        onChange={obtenerCategorias}
                        value={categoria}
                    >
                        <option value="">--Selecione Categoria--</option>
                        {categorias.map((categoria) => (
                            <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}

                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit" 
                        value="Buscar Bebidas" 
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;