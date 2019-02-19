import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
// import { history } from '../_helpers';
// import $ from 'jquery';

export const userActions = {
    login,
    logout,
    register,
    // getAll,
    profileEdit,
    // getById,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    // history.push('/profile');
                    // close_modal();
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success(user));
                    // history.push('/profile');
                    dispatch(alertActions.success('Registration successful'));
                    // close_modal();
            
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error.toString()))
//             );
//     };

//     function request() { return { type: userConstants.GETALL_REQUEST } }
//     function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
// }

// function getById() {
//     return dispatch => {
//         dispatch(request());

//         userService.getById()
//             .then(
//                 user => {
//                     dispatch(success(user))
//                     let save_user = JSON.parse(localStorage.getItem('user'));
                    
//                     save_user = { ...JSON.parse(user)};
//                     localStorage.setItem('user', JSON.stringify(save_user));
//                 },
//                 error => dispatch(failure(error.toString()))
//             );
//     };

//     function request(user) { return { type: userConstants.GETBYID_REQUEST, user } }
//     function success(user) { return { type: userConstants.GETBYID_SUCCESS, user } }
//     function failure(error) { return { type: userConstants.GETBYID_FAILURE, error } }
// }

function profileEdit(user) {
    return dispatch => {
        dispatch(request(user));

        userService.update(user)
            .then(
                 user => { 
                    dispatch(success());
                    dispatch(alertActions.success('Profile Edit successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.PROFILE_EDIT_REQUEST } }
    function success(user) { return { type: userConstants.PROFILE_EDIT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.PROFILE_EDIT_FAILURE, error } }
}