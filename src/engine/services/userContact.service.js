import {browserHistory} from  'react-router';
import { authHeader } from '../helpers';

export const config = {
    apiUrl: 'https://cesarbruschetta.pythonanywhere.com/api',
};


export const userContactService = {
    contacts,
    // logout,
    // register,
    // update,
};


function contacts(user) {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
    };

    return fetch(`${config.apiUrl}/contacts`, requestOptions)
        .then(handleResponse)
        .then(contacts => {
            return contacts
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