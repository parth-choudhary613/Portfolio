import React from 'react';
import Images from '../assets/avatar.svg'
import { FaGithub, FaYoutube } from 'react-icons/fa';
import {AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <motion.section 
    animate={{ rotate: 720}}
  transition={{ type: 'spring' }}
    className='min-h-[65vh] lg:min-h-[65vh]' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12'>

          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn("up", 0.3)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              Parth <span>Choudhary</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer', 2000,
                  'Designer', 2000,
                  'Influencer', 2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn("up", 0.5)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
            <b>  "Full-Stack Developer | MERN Stack Developer | Creating Dynamic and Responsive Web Solution" </b>
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{ once: false, amount: 0.7 }} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'>MY Portfolio</a>
            </motion.div>

            {/* social */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
              <AiFillInstagram />
              </a>
            </div>
          </div>

          {/* images */}
          <motion.div 
           animate={{ rotate: 720}}
           transition={{ type: 'spring' }}
            variants={fadeIn("down", 0.8)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.7 }} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Images} alt='' />
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
};

export default Banner;
