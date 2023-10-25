import React, {useState, useEffect} from "react";
import { NavLink, useLocation, Navigate } from "react-router-dom";
import { fetchData } from "../../util/fetchData";

export const Header = () => {
    const [data, setData] = useState([]);
    const {pathname} = useLocation();

    useEffect(()=> {
        fetchData(setData);
    }, []);

    if (pathname === '/test_app/' && data.length) {
        return (
            <Navigate to={`/test_app/${data[0].id}`} />
        );
    }

    return (
        <header>
            {data.map(tab => (<NavLink key={tab.order} to={`/test_app/${tab.id}`} >{tab.title}</NavLink>))}
        </header>
    );
}