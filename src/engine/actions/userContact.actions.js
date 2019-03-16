import { contactConstants } from '../constants';
import { userContactService } from '../services';
import { alertActions } from './';


export const userContactActions = {
    contacts,
    create,
    update,
    getById,
    // delete,
};

function contacts() {
    return dispatch => {
        dispatch(request());

        userContactService.contacts()
            .then(
                contacts => dispatch(success(contacts)),
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: contactConstants.USER_CONTACTS_REQUEST } }
    function success(contacts) { return { type: contactConstants.USER_CONTACTS_LIST, contacts } }
    function failure(error) { return { type: contactConstants.USER_CONTACTS_FAILURE, error } }
}

function create(contact) {
    return dispatch => {
        dispatch(request(contact));

        userContactService.create(contact)
            .then(
                contact => {
                    dispatch(success(contact));
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(contact) { return { type: contactConstants.USER_CONTACTS_REQUEST, contact } }
    function success(contact) { return { type: contactConstants.USER_CONTACTS_CREATE, contact } }
    function failure(error) { return { type: contactConstants.USER_CONTACTS_FAILURE, error } }
}

function update(contact) {
    return dispatch => {
        dispatch(request(contact));

        userContactService.update(contact)
            .then(
                 user => {
                    dispatch(success(contact));
                    dispatch(alertActions.success('Profile Edit successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(contact) { return { type: contactConstants.USER_CONTACTS_REQUEST, contact } }
    function success(contact) { return { type: contactConstants.USER_CONTACTS_UPDATE, contact } }
    function failure(error) { return { type: contactConstants.USER_CONTACTS_FAILURE, error } }
}

function getById(contact_uid) {
    return dispatch => {
        dispatch(request(contact_uid));

        userContactService.getById(contact_uid)
            .then(
                contact => dispatch(success(contact)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(contact_uid) { return { type: contactConstants.USER_CONTACTS_GETBYID_REQUEST, contact_uid } }
    function success(contact) { return { type: contactConstants.USER_CONTACTS_GET, contact } }
    function failure(error) { return { type: contactConstants.USER_CONTACTS_FAILURE, error } }
}