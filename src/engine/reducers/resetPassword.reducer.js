import { userConstants } from 'engine/constants';

export function reset_password(state = {}, action) {
  switch (action.type) {
    case userConstants.RESET_PASSWORD_REQUEST:
      return { resetIn: true };
    case userConstants.RESET_PASSWORD_SUCCESS:
      return {};
    case userConstants.RESET_PASSWORD_FAILURE:
      return {};
    default:
      return state
  }
}