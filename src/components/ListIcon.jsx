import React from 'react';

const ListIcon = (props) => {
    return (
        <li onClick={props.route}>
            <img src={props.icon} alt={props.name} className={"sidebar-li-icon " + props.name} />
            <span>{props.name}</span>
        </li>
    );
};

export default ListIcon;