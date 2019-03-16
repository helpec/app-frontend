import { contactConstants } from '../constants';
import { getUser } from 'engine/helpers';

let user = getUser();
const initialState = user ? { contact: {}, contacts: [], savingContact: false} : {};

export function user_contact(state = initialState, action) {
  switch (action.type) {
    case contactConstants.USER_CONTACTS_REQUEST:
      return {
        contacts: [],
        contact: {}
      };
    case contactConstants.USER_CONTACTS_LIST:
      return {
        contacts: action.contacts
      };
    case contactConstants.USER_CONTACTS_CREATE:
      return {
        contact: {},
        savingContact: true
      };
    case contactConstants.USER_CONTACTS_UPDATE:
      return {
        contact: {},
        savingContact: true
      };
    case contactConstants.USER_CONTACTS_GETBYID_REQUEST:
      return {
        contact: {},
        savingContact: false
      };
    case contactConstants.USER_CONTACTS_GET:
      return {
        contact: action.contact,
        savingContact: false
      };
    case contactConstants.USER_CONTACTS_DELETE:
      return {
        contact: {}
      };
    case contactConstants.USER_CONTACTS_FAILURE:
      return { 
        error: action.error,
        savingContact: false,
        contact: {},
        contacts: []
      };      
    default:
      return state
  }
}