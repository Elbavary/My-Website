import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <a
      href='https://www.linkedin.com/in/khaled-gamel'
      target='_blank'
      rel='noreferrer'
    >
      <BsLinkedin />
    </a>
    <a
      href='https://github.com/Elbavary?tab=repositories'
      target='_blank'
      rel='noreferrer'
    >
      <BsGithub />
    </a>
    <a
      href='https://www.facebook.com/khaledgamel6'
      target='_blank'
      rel='noreferrer'
    >
      <FaFacebookF />
    </a>
  </div>
);

export default SocialMedia;
