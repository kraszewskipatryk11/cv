'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { InfiniteMovingCards } from './ui/infinite-moving-cards.tsx'
import { companies, techStack } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
        <motion.h1 
          className='heading'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
            My {''}
        <span className='text-purple'>
            Tech Stack
        </span>
        </motion.h1>
        <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards 
            items={techStack}
            direction='right'
            speed='slow'
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id, img, name }) => (
                    <div key={id} className='flex flex-col items-center gap-2'>
                        <img
                        src={img}
                        alt={name}
                        className='md:w-10 w-8'
                        />
                        <span className='text-white text-sm md:text-base font-medium'>{name}</span>
                    </div>
                ))}
            </div>
            </div>
         </div>
  )
}

export default Clients