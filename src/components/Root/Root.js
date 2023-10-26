import React, {useState, useEffect} from "react";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";
import { fetchData } from "../../util/fetchData";
import { ArticleContext } from "../ArticleContext/ArticleContext";

export const Root = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetchData(setData);
    }, []);

    return (
        <>
            <Header data={data}/>
            <main>
                <ArticleContext.Provider value={data}>
                    <Outlet/>
                </ArticleContext.Provider>
            </main>
        </>
    );
}