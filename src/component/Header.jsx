import React from 'react';
import HeroImg from '../assets/images/eco-friendly-face-min.jpeg'
// import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';





export default function Header() {
  return (
    <div className="  mt-20 font-third relative ">
        <div className=" flex flex-col items-center text-[#444]   ">
            <div className="  absolute top-[5%] lg:top-5  text-xl">Beauty & Fashion</div>
            <div className="absolute top-[9%]  lg:top-14  text-8xl ">Blog</div>
        </div>
        <img className=" w-full h-5/6 mt-24 object-cover " src={HeroImg} alt="lady eco friendly" />
    </div>
  )
}
