import { contactConstants } from '../constants';
import { userContactService } from '../services';
import { alertActions } from './';


export const userContactActions = {
    contacts,
    // create,
    // update,
    // delete,
};

function contacts(user) {
    return dispatch => {
        dispatch(request({ user }));

        userContactService.contacts(user)
            .then(
                contacts => { 
                    dispatch(success(user, contacts));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: contactConstants.USER_CONTACTS_REQUEST, user } }
    function success(user, contacts) { return { type: contactConstants.USER_CONTACTS_LIST, user, contacts } }
    function failure(error) { return { type: contactConstants.USER_CONTACTS_FAILURE, error } }
}

