import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/payalsahu13?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/payalsahu1305?igsh=aWdsczF5dGg0d3lw" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
    <div>
    <a href="https://github.com/payalsahu1303" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>

  </div>
);

export default SocialMedia;