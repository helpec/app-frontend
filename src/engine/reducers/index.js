import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { user_contact } from './userContact.reducer';
import { registration } from './registration.reducer';
import { savingProfile } from './savingProfile.reducer';


const rootReducer = combineReducers({
  authentication,
  user_contact,
  registration,
  savingProfile,
  alert
});

export default rootReducer;