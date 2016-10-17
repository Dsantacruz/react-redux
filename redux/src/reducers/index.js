/**
 * Created by Diego Santa Cruz on 13/10/2016.
 */
//combineReducers trae todos los reducers
import { combineReducers } from 'redux';
import items from './items';

console.log("antes de combinereducers");
export default combineReducers({
    items
});
console.log("Despues de combinereducers");