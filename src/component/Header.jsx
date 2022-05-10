import React from 'react';
import HeroImg from '../assets/images/eco-friendly-face-min.jpeg'
// import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';





export default function Header() {
  return (
    <div className="mt-20 font-third">
        <div className=" flex flex-col items-center text-[#444]">
            <span className=" absolute top-[18%] text-xl">Beauty & Hair</span>
            <span className="absolute top-[20%] text-8xl ">Blog</span>
        </div>
        <img className="headerImg w-full h-5/6 mt-24 object-cover " src={HeroImg} alt="lady eco friendly" />
    </div>
  )
}
