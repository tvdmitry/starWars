import {HTTP, SWAPI_PEOPLE, SWAPI_ROOT} from "../constants/api";

const getId = (url, category) => {
    const id = url
        .replace(HTTP+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)