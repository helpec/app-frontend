export function authHeader() {
    // return authorization header with jwt token
    if (isAuthentication()) {
        let user = getUser();
        return { 'Authorization': 'Token ' + user.key };
    } else {
        return {};
    }
}

export function isAuthentication(){
    // return if user in local storage
    let user = getUser();
    if (user && user.key) {
        return true
    } else {
        return false;
    }
}

export function getUser() {
    // return authorization user saved
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.key) {
        return user
    } else {
        return {};
    }
}

export function removeSessionUser() {
    localStorage.removeItem('user')
}
