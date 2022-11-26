import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/khaled-gamel-ba5b37223/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Elbavary?tab=repositories" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/khaledgamel6" target="_blank">
        <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
