'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSentry } from "react-icons/si";
import { InfiniteMovingCards } from './ui/infinite-moving-cards.tsx'
import { techStack } from '@/data'

const iconMap: { [key: string]: any } = {
  FaReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSentry,
};

const TechStack = () => {
  const techStackWithIcons = techStack.map((tech) => {
    const IconComponent = iconMap[tech.iconName];
    let icon = null;
    
    if (tech.iconImg) {
      // Use custom image if provided
      icon = <img src={tech.iconImg} alt={tech.name} className="w-10 h-10" />;
    } else if (IconComponent) {
      // Otherwise use react-icon
      icon = <IconComponent className="w-10 h-10" style={{ color: tech.color }} />;
    }
    
    return {
      ...tech,
      icon,
    };
  });

  return (
    <div className='py-20' id='tech-stack'>
        <h1 className='heading'><span className='text-purple'>
            Tools & Technologies
        </span>
             {''} that I work with
        </h1>
        <div className="flex flex-col items-center mt-10 md:mt-10">
            <InfiniteMovingCards 
                items={techStackWithIcons}
                direction='right'
                speed='slow'
            />
        </div>
    </div>
  )
}

export default TechStack
