import { authHeader, history, getUser } from '../helpers';

export const config = {
    apiUrl: 'https://cesarbruschetta.pythonanywhere.com/api',
};


export const userContactService = {
    contacts,
    create,
    update,
    getById,
};


function contacts() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };

    return fetch(`${config.apiUrl}/accounts/contact/`, requestOptions)
        .then(handleResponse)
        .then(contacts => {
            return JSON.parse(contacts);
        });
}

function create(contact) {
    
    contact['user'] = getUser().id;     
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    };

    return fetch(`${config.apiUrl}/accounts/contact/`, requestOptions)
        .then(handleResponse)
        .then(contact => {
            history.push('/profile/contatos');
        });
}

function update(contact) {
    
    contact['user'] = getUser().id; 
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    };

    return fetch(`${config.apiUrl}/accounts/contact/${contact.id}`, requestOptions)
        .then(handleResponse)
        .then(contact => {
            history.push('/profile/contatos');
        });;
}

function getById(contact_uid) {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };

    return fetch(`${config.apiUrl}/accounts/contact/${contact_uid}`, requestOptions)
        .then(handleResponse)
        .then(contact => {
            return JSON.parse(contact);
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        // const data = text && JSON.parse(text);
        if (!response.ok) {
            
            alert(text)
            const error = text || response.statusText;
            
            return Promise.reject(error);
        }

        return text;
    });
}