import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { user_contact } from './userContact.reducer';
import { registration } from './registration.reducer';
import { savingProfile } from './savingProfile.reducer';
import { reset_password } from './resetPassword.reducer';
import { change_password } from './changePassword.reducer';


const rootReducer = combineReducers({
  authentication,
  user_contact,
  registration,
  savingProfile,
  reset_password,
  change_password,
  alert
});

export default rootReducer;