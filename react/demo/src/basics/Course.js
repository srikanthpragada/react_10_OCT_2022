import React from 'react'
import PropTypes from 'prop-types';

export default function Course(props) {
    return (
        <>
            <h2>{props.title} </h2>
            <h3>{props.fee} INR</h3>
            <h3>{props.duration ? props.duration : 10}</h3>
        </>
    )
}

Course.propTypes = {
    title: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired,
    duration: PropTypes.number
};