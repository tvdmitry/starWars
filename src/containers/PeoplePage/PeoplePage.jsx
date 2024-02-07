import React, {useEffect, useState} from 'react';
import './PeoplePage.module.css';
import {API_PEOPLE} from "@constants/api";
import {getApiResource} from "@utils/network";
import {getPeopleId, getPeopleImage} from "@services/getPeopleData";
import {withErrorApi} from "@hoc-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import PropTypes from "prop-types";

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);


    const getResource = async (url) => {
        const res = await getApiResource(url)

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return {
                    id,
                    name,
                    img,
                }
            })

            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }


    useEffect(() => {
        getResource(API_PEOPLE)
    }, [getResource]);

    return (
        <>
            <h1>Navigation</h1>
            {people && <PeopleList people={people}/>}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);
