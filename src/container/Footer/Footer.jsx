import React from 'react';
import { useForm } from 'react-hook-form';

import images from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const { register, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:khaledgamel2012@gmail.com" className="p-text">
            khaledgamel2012@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+201224676075" className="p-text">
            +201224676075
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            {...register('name')}
            className="p-text"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="app__flex">
          <input
            {...register('email')}
            className="p-text"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <textarea
            {...register('message')}
            className="p-text"
            placeholder="Your Message"
          />
        </div>
        <button
          type="button"
          className="p-text"
          onClick={() => {
            reset();
          }}
        >
          Send Message
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
