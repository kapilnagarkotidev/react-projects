import React from 'react'
import heroImg from '../assets/heroImg.png'
import grain1 from '../assets/grain2.png'
import grain2 from '../assets/grain.png'

const Hero = () => {
    return (
        <div className='heroSection px-7 flex flex-row-reverse items-center'>
            <div className="heroImg flex justify-center my-5 lg:w-12/8 ">
                <img src={heroImg} alt="Hero Image" className='w-4/5 lg:w-10/12' />
            </div>
            <div className="para my-5  lg:w-full flex flex-col gap-4">
                <div className="topic my-4">
                    <span className='font-head-font text-5xl text-blue-clr font-bold lg:text-6xl'>Loved by millions.</span>
                </div>
                <div className="para font-para-font ">
                    <span className='text-3xl text-gray-clr '>With over <span className='font-bold text-black '>120M+ Players </span> we know people lover our games. We have been able to come this far by making simple , heart-warming experience for our players all over the world.</span>
                </div>
                <div className="milestone flex justify-around my-5 lg:justify-evenly">
                    <div className="games flex">
                        <img src={grain1} className='w-8' />
                        <div className="inner font-para-font text-center px-1">
                        <span className='block text-3xl font-bold lg:text-5xl'>12+</span>
                        <span className='block text-2xl font-bold text-gray-600'>Games</span>
                        </div>
                        <img src={grain2} className='w-8' />
                    </div>
                    <div className="players flex font-para-font text-center px-1">
                    <img src={grain1} className='w-8' />
                        <div className="inner">
                        <span className='block text-5xl font-bold'>120M+</span>
                        <span className='block text-2xl font-bold text-gray-600'>Players</span>
                        </div>
                        <img src={grain2} className='w-8' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero