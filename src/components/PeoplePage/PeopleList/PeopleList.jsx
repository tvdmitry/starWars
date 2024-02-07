import React from 'react';
import styles from './PeopleList.module.css'
import PropTypes from "prop-types";

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({id, name, img}) =>
                <li key={id} className={styles.list__item}>
                    <a href="#">
                        <img className={styles.person__photo} src={img} alt={name}/>
                        <p>{name}</p>
                    </a>
                </li>
            )}
        </ul>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;
