import React from 'react';
import { motion } from "framer-motion";

import { AppWrap } from '../../wrapper'

import { images } from "../../constants";

import './Header.scss';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

function Header( props ) {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">
                                Hi, I'm
                            </p>
                            <h1 className="head-text">
                                Oleksii
                            </h1>
                        </div>
                    </div>

                    {/*<div className="app__footer-cards">*/}
                    {/*    <div className="app__footer-card">*/}
                    {/*        <img src={images.resume} alt="resume" />*/}
                    {/*        <a*/}
                    {/*            href="https://drive.google.com/file/d/1kU30EoMweXv7lVibiyYzXbNRfOTvswS3/view?usp=sharing"*/}
                    {/*            target="_blank"*/}
                    {/*            title="View my resume in PDF"*/}
                    {/*            className="p-text">MY RESUME</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg"/>
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.react, images.javascript, images.sass].map((circle, index) => (
                    <div
                        className="circle-cmp app__flex"
                        key={`circle-${index}`}
                    >
                        <img src={circle} alt="circle"/>

                    </div>
                ))}
            </motion.div>

        </div>
    );
}

export default AppWrap(Header,'home' );
