import { userConstants } from 'engine/constants';

export function change_password(state = {}, action) {
  switch (action.type) {
    case userConstants.CHANGE_PASSWORD_REQUEST:
      return { changeIn: true };
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      return {};
    case userConstants.CHANGE_PASSWORD_FAILURE:
      return {};
    default:
      return state
  }
}