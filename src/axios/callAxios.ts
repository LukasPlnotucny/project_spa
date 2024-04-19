import axios from 'axios'

export function callAxios(
    url: string,
    method: string = Method.GET,
    data?: object,
    headers?: object
) {
    return axios({
        baseURL: import.meta.env.VITE_API_URL,
        url: url,
        method: method,
        headers: headers,
        data: data,
        withCredentials: true,
        withXSRFToken: true,
    }).catch(error => {
        throw error
    })
}

export enum Method {
    POST    = 'POST',
    GET     = 'GET',
    PUT     = 'PUT',
    DELETE  = 'DELETE'
}