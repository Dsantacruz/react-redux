/**
 * Created by Diego Santa Cruz on 13/10/2016.
 */
//Estado anterior y la accion , devuelve el nuevo estado, tendrá un switch para comprobar el action.type
const item = (state, action) => {
  console.log("pasa item");
  console.log(state);
  switch (action.type)
  {
    case 'ADD_ITEM':
      return {
        id: action.id,
        text: action.text
      }
      break;

    default:
      return state;
  }
}

const items = (state = [], action) => {
  console.log("pasa items");
  console.log(state);
  console.log(action);
  switch (action.type)
  {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ];
      break;

    default:
      return state;
  }
}

export default items;