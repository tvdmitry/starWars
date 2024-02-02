import React, {useEffect, useState} from 'react';
import './PeoplePage.module.css';
import {API_PEOPLE} from "../../constants/api";
import {getApiResource} from "../../utils/network";
import {getPeopleId} from "../../services/getPeopleData";

const PeoplePage = () => {
    const [people, setPeople] = useState(null);

    const getResource = async (url) => {
        const res = await getApiResource(url)

        const peopleList = res.results.map(({name, url}) => {
            const id = getPeopleId(url)

            return {
                name,
                url,
            }
        })

        setPeople(peopleList)
    }

    useEffect(() => {
        getResource(API_PEOPLE)
    }, []);

    return (
        <>
            {people && (
                <ul>
                    {people.map(({name, url}) => (
                            <li key={name}>{name}</li>
                        )
                    )}
                </ul>
            )}
        </>
    );
};

export default PeoplePage;
