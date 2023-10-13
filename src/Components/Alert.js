import React from 'react'


function capitalise(word) {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
export default function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}

        </div>
    )
}
