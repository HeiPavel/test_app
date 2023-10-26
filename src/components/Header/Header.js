import React from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";

export const Header = ({data}) => {
    const {pathname} = useLocation();
    
    if (data.length && pathname.replaceAll('/', '') === 'test_app') {
        return (
            <Navigate to={data[0].id} />
        );
    }

    return (
        <header>
            {data.map(tab => (<NavLink key={tab.order} to={`${tab.id}`} >{tab.title}</NavLink>))}
        </header>
    );
}