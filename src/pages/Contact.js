import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h2>Contact page</h2>
            <p style={{ padding: "1rem 2.5rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dignissimos distinctio consequatur qui dolorum cumque sequi, totam soluta tenetur optio libero. Beatae blanditiis mollitia iusto iste, corrupti eos, distinctio assumenda adipisci sequi doloremque totam ab nesciunt, saepe voluptatibus nostrum doloribus fugiat ipsum quam minima quibusdam officiis sunt ex fugit!</p>

            {/* here I used react-router-bootstrap to navigate. */}

            <LinkContainer to="/home" >
                <button className='button_1'>Go to home using react-router-bootstrap</button>
            </LinkContainer>

            {/* here I used useNavigate hook to navigate. */}

            <button className='button_2' onClick={() => {
                navigate("/home");
            }}>Go to home using useNavigate hook</button>

        </div>
    )
}

export default Contact