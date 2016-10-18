import { connect } from 'react-redux';
import ItemList from '../components/ItemList'

//podemos pasarle el estado a nuestro componentes
const mapStateToProps = (state) => {
	console.log("mapstatetoprops");
	console.log(state);
    return {
        items: state.items
    }
};

//podemos llamar a cualquier accion de la aplicacion
//podemos pasar acciones a nuestros componentes
//le estoy dando logica al evento omItemClick
const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => {
            console.log(id);
        }
    }
};

//le paso el mapstatetoprops para pasarle el estado al componente itemlist
//le paso el maptispatchtoprops para q ejecute la accion onItemClick
const ItemsList = connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemsList;