/**
 * Created by Diego Santa Cruz on 13/10/2016.
 */
//Estado anterior y la accion , devuelve el nuevo estado, tendrá un switch para comprobar el action.type
const item = {state, action} => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: action.id,
                text: action.text
            }
            break

        default:
            return state;
    }
}

consts items = (state = [], action) => {
    switch (action.type)
    {
        case 'ADD_ITEM':
            return [
                //Propagation
                ...state,
                item(undefined, action);
            ]
            break;

        default:
            return state;

    }
}

export default items;