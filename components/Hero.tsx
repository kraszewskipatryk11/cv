import React from 'react'
import { cn } from "@/lib/utils";
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/textGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative h-screen w-full flex items-center justify-center bg-white dark:bg-black-100">
      
      {/* SPOTLIGHTS */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* GRID BACKGROUND */}
      {/* GRID BACKGROUND */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:29px_25px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* MASK / FADE OVERLAY */}
      <div className={cn(
        "pointer-events-none absolute inset-0 flex items-center justify-center",
        "bg-white dark:bg-black-100",
        "[mask-image:linear-gradient(to_right,black_0%,transparent_15%,transparent_85%,black_100%)]"
      )}></div>

    

      {/* TEKST NAD GRIDEM */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          Dynamic Web Magic with Next.js
        </h2>

        <TextGenerateEffect
            className="text-center text-[40px]
            md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User
            Experiences"
            />

        <p className='text-center md:tracking-wider
            mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Patryk, a Next.js Developer
            based in Lublin, Poland.
        </p>
        
        <a href='#about'>
            <MagicButton
                title="Show my work"
                icon={<FaLocationArrow/>}
                position='right'
            />
        </a>

      </div>
    </div>
  )
}

export default Hero
