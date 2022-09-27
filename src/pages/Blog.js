import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Blog = () => {

    const { title } = useParams();
    const location = useLocation();

    return (
        <div>
            <h2>{title}</h2>
            <p style={{ padding: "1rem 2.5rem" }}>{location.state.body}</p>
        </div>
    )
}

export default Blog