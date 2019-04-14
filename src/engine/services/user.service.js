import { history, authHeader, config } from 'engine/helpers';

export const userService = {
    login,
    logout,
    register,
    getById,
    update,
    resetPassword,
    changePassword,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${config.apiUrl}/rest-auth/login/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', user);
                history.push('/profile');
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getById() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };

    return fetch(`${config.apiUrl}/rest-auth/user/`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/rest-auth/registration/`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/rest-auth/user/`, requestOptions).then(handleResponse);
}

function resetPassword(email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email})
    };

    return fetch(`${config.apiUrl}/rest-auth/password/reset/`, requestOptions).then(handleResponse);
}

function changePassword(password){
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "new_password1":password, 
            "new_password2":password
        })
    };

    return fetch(`${config.apiUrl}/rest-auth/password/change/`, requestOptions).then(handleResponse);    
}

function handleResponse(response) {
    return response.text().then(text => {
        // const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                history.push('/');
            }

            alert(text)
            const error = text || response.statusText;

            return Promise.reject(error);
        }

        return text;
    });
}
