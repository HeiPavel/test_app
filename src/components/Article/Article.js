import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ArticleContext } from "../ArticleContext/ArticleContext";

export const Article = () => {
    const {title} = useParams();
    const [content, setContent] = useState({heading: '', definition: '', description: ''});
    const data = useContext(ArticleContext);
    const currentArticle = data.find(el => el.id === title);

    useEffect(() => {
        if (currentArticle) {
            (async () => {
                const currentContent = await import(`../${currentArticle.path}`);
                setContent(currentContent.default);
            })();
        }
    }, [currentArticle]);
    

    return (
        <article>
            <h2>{content.heading}</h2>
            <ul>
                <li><span>Definition: </span>{content.definition}</li>
                <li><span>Description: </span>{content.description}</li>
            </ul>
        </article>
    );
}