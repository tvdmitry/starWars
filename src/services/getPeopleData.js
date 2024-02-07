import {GUIDE_IMG_EXTENSION, HTTPS, SWAPI_PEOPLE, SWAPI_ROOT, URL_IMG_PERSON} from "@constants/api";

const getId = (url, category) => {
    return url
        .replace(HTTPS + SWAPI_ROOT + category, '')
        .replace(/\//g, '')
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`

