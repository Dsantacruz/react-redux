/**
 * Created by Diego Santa Cruz on 13/10/2016.
 */
let nextId = 0;

export const addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    id: nextId++,
    text
  }
}