/**
 * Created by Diego Santa Cruz on 13/10/2016.
 */
//combineReducers trae todos los reducers
import { combineReducers } from 'redux';
import items from './items';

export default combineReducers({
    items
});