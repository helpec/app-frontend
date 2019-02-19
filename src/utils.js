export function getUsers() {
    // return authorization user saved
    let users = JSON.parse(localStorage.getItem('users'));
    
    return users;
}

export function setUsers(user) {
    let users = getUsers();
    
    localStorage.setItem('users', 
        JSON.stringify(
            [...users, user]
        )
    )
}

export function getSessionUser() {
    // return authorization user saved
    let user = JSON.parse(localStorage.getItem('user'));
    return user;
}

export function setSessionUser(user) {
    localStorage.setItem('user', 
        JSON.stringify(user)
    )
}

export function removeSessionUser() {
    localStorage.removeItem('user')
}

