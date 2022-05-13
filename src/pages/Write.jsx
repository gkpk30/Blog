import React from 'react'
import { AiOutlineFileAdd} from 'react-icons/ai';


import yellowHair from '../assets/images/model-pink-hair-yellow-background-min.jpeg'


export default function Write() {
  return (
    <div className="write pt-14 max-w-5xl mx-auto px-2 ">
        <img src={yellowHair} 
            alt="" 
            className=" w-full lg:w-3/5 h-[500px] round-xl object-cover " 
        />
            <form className="writeform relative lg:max-w-6xl ">
                <div className="writeFormGroup  flex items-center my-8">
                    <label htmlFor="fileInput">
                    
                        <i className=" writeIcon text-3xl text-green-400 rounded-full border h-10 w-10 flex items-center justify-center border-textPrimary mr-3 "> <AiOutlineFileAdd/></i>
                        
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}} />
                    <input type="text" placeholder='Title' autoFocus={true} className=" text-3xl border-none p-5 w-3/4 focus:outline-none writeInput" />
                </div>
                <div className="writeformgroup  flex items-center "> 
                    <textarea placeholder="Tell your story" className=" writeInput writeText text-3xl border-none  p-5 w-full h-screen focus:outline-none "   type="text" />
                    
                </div>
                <button type="submit" className=" writeSubmit absolute top-2 right-12 bg-green-600 hover:bg-green-800 text-slate-100 p-5 rounded-xl flex items-center ">Publish</button>
            </form>
    </div>
  )
}
