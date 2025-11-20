'use client'

import React from 'react'
import { motion } from 'framer-motion'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[10px] pb-10' id='contact'>

        <div className='flex flex-col items-center'>
            <motion.h1 
              className='heading lg:max-w-[45vw]'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
                Ready to take <span 
                className='text-purple'>your</span> digital presence to <span
                className='text-purple'>next level</span>?
            </motion.h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
            <a href='mailto:kraszewski-patryk@o2.pl'>
                <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright ©2025 Patryk Kraszewski</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                    <img src={profile.img} alt={`social-${profile.id}`} width={20} height={20} />
                    </div> 
                ))}

            </div>
        </div>
    </footer>
  )
}

export default Footer