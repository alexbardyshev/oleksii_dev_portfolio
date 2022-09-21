import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { MotionWrap } from '../../wrapper/MotionWrap';
import {images} from "../../constants";

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">I Build <span>Cool Apps</span> <br />Using This  <span>Stack</span></h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                ))}
                <div className="app__footer-cards">
                    <div className="app__footer-card">
                        <img src={images.resume} alt="resume" />
                        <a
                            href="https://drive.google.com/file/d/1kU30EoMweXv7lVibiyYzXbNRfOTvswS3/view?usp=sharing"
                            target="_blank"
                            title="View my resume in PDF"
                            className="p-text">My Resume</a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);
