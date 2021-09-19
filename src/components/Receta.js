import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        display: 'block'
        },
        header: {
        padding: '12px 0',
        borderBottom: '1px solid darkgrey'
        },
        content: {
        padding: "12px 0",
        overflow: 'scroll'
        }
}));


const Receta = ({receta}) => {
    const {recetamodal,guardarIdReceta,guardarReceta} = useContext(ModalContext)

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    //mostrar informacion
    const mostrarIngredientes = (recetamodal)=>{
        let ingredientes = [];
        for(let i = 1; i < 16; i++){
            if(recetamodal[`strIngredient${i}`]){
                ingredientes.push(
                    <li>{recetamodal[`strIngredient${i}`]} {recetamodal[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }



    return ( 
        <div className="col-md-4 mt-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} className="card-img-top" />
                <div className="card-body">
                    <button 
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={()=> {
                            guardarIdReceta(receta.idDrink)
                            handleOpen()
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={()=>{
                            guardarIdReceta(null)
                            guardarReceta({})
                            handleClose()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper} >
                            <h2>{recetamodal.strDrink}</h2>
                            <img className="img-fluid" src={recetamodal.strDrinkThumb} alt="" />
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {recetamodal.strInstructions}
                            </p>
                            <h3>Mostrar ingredientes y cantidades</h3>
                            <ul>
                                {mostrarIngredientes(recetamodal)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;