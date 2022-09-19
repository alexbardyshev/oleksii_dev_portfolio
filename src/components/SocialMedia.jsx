import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/oleksiibardyshev" target="_blank"><BsLinkedin /></a>
            </div>
            <div>
                <a href="https://github.com/alexbardyshev" target="_blank"><BsGithub /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/oleksii.dev" target="_blank"><BsInstagram /></a>
            </div>
        </div>
    );
}

export default SocialMedia;
