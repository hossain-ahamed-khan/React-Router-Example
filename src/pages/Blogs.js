import React from 'react';
import { Link } from 'react-router-dom';

import { blogsData } from "../data";

const Blogs = () => {
    const blogs = blogsData;

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "..."
        }
        else {
            return str;
        }
    }

    return (
        <div>
            <h2>Blogs page</h2>

            <section>
                {blogs.map((blog) => {
                    const { id, title, body } = blog;
                    return <article key={id}>
                        <h3>{title}</h3>
                        <p>{truncateString(body, 100)}</p>
                        <Link className='blog-link' to={title} state={{ id, title, body }}>Learn More</Link>
                    </article>
                })}
            </section>


        </div>
    )
}

export default Blogs