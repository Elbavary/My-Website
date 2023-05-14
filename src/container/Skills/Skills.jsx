import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { skills } from '../../data/SkillsData';
import { experience } from '../../data/ExperienceData';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map(skill => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className='app__skills-exp'>
          <motion.div className='app__skills-exp-works'>
            {experience.map((work, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-exp-work'
                data-tip
                data-for={work.name}
              >
                <h1>{work.name}</h1>
                <p>{work.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
