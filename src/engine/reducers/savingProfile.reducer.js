import { userConstants } from 'engine/constants';
import { userActions } from 'engine/actions';
import { getUser } from 'engine/helpers';

let user = getUser();
const initialState = user ? { savingProfile: false, user } : {};

export function savingProfile(state = initialState, action) {
  switch (action.type) {
    case userConstants.PROFILE_EDIT_REQUEST:
      return {
        savingProfile: true,
        user: action.user
      };
    case userConstants.PROFILE_EDIT_SUCCESS:
      return {
        savingProfile: true,
        user: action.user
      };
    case userConstants.PROFILE_EDIT_FAILURE:
      return {};
    default:
      return state
  }
}