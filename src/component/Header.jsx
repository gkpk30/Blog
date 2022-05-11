import React from 'react';
import HeroImg from '../assets/images/eco-friendly-face-min.jpeg'
// import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';





export default function Header() {
  return (
    <div className="header  mt-20 font-third  ">
        <div className="headerTitles flex flex-col items-center text-[#444] relative h-[20px] bg-yellow-700 ">
            <div className="headerTitleSm  absolute top-[78%] lg:top-5  text-xl">Beauty & Fashion</div>
            <div className="headerTitleLg absolute top-[300%]  lg:top-14  text-8xl ">Blog</div>
        </div>
        <img className="headerImg w-full h-5/6 mt-24 object-cover " src={HeroImg} alt="lady eco friendly" />
    </div>
  )
}
