import {combineReducers} from 'redux';
import appointmentsReducer from './appointmentsReducer';
import validationReducer from './validationReducer';

export default combineReducers({
    appointments: appointmentsReducer,
    error: validationReducer
});