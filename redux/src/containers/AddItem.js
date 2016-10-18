import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

//permite conectar el componente con la aplicacion para que se pueda visualizar, y permite llamar a dos funciones que podemos definir , para pasarle el estado, y pasarle las propiedades a los componentes.
let AddItem = ({dispatch}) => {console.log("containers addItem.js");
    let input;

    return (
        <div className="col-md-6 col-md-offset-3">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if(!input.value.trim()) return;
                    //dispatch permite ejecutar acciones
                    dispatch(addItem(input.value));
                    input.value = '';
                }}
            >

                <input
                    type="text"
                    style={{marginBottom: '5px'}}
                    className="form-control"
                    ref={node => {
                        input = node
                    }}
                />

                <button type="submit" className="btn btn-success btn-block">
                    Add Item
               </button>

            </form>
        </div>
    )
}

AddItem = connect()(AddItem);
export default AddItem;