import { combineReducers } from 'redux';
import authreducer from './authReducer';
import { reducer as formReducer } from 'redux-form'; // For Redux form

export default combineReducers({
  auth: authreducer,
  form: formReducer, // Redux form - Standard name for key
});
