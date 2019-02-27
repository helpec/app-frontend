import { contactConstants } from '../constants';
import { getUser } from 'engine/helpers';

let user = getUser();
const initialState = user ? { user, contacts: [] } : {};

export function user_contact(state = initialState, action) {
  switch (action.type) {
    case contactConstants.USER_CONTACTS_REQUEST:
      return {
        user: action.user,
        contacts: []
      };
    case contactConstants.USER_CONTACTS_LIST:
      return {
        user: action.user,
        contacts: []
      };
    case contactConstants.USER_CONTACTS_CREATE:
      return {
        user: action.user,
        contacts: []
      };
    case contactConstants.USER_CONTACTS_UPDATE:
      return {
        user: action.user,
        contacts: []
      };
    case contactConstants.USER_CONTACTS_GET:
      return {
        user: action.user,
        contacts: []
      };
    case contactConstants.USER_CONTACTS_DELETE:
      return {
        user: action.user,
        contacts: []
      };
    default:
      return state
  }
}