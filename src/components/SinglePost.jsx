import React from 'react'
import { AiTwotoneEdit, AiTwotoneDelete} from 'react-icons/ai';


export default function SinglePost() {
  return (
    <div className="lg:col-span-9 xl:col-span-10 ">
      <div className="singlePostWrapper p-5 pr-0 ">
        <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" className="singlePostImage w-full h-80 object-cover rounded-md" />
        <h1 className=" text-center font-third text-3xl m-3">
          Lorem ipsum dolor sit amet consectetur.
        
          <div className="float-right flex flex-row gap-3 mr-20">
            <i className="text-xl text-green-400 "><AiTwotoneEdit/></i>
            <i className="text-xl text-red-400"><AiTwotoneDelete/></i>
          </div>
        </h1>
        <div className=" mb-5 flex justify-between text-lg font-fourth mr-20 text-[#b39656] ">
          <span className="singlePostAuthor">Author: <b>Natt</b> </span>
          <span className="singlePostDate">1hour ago</span>
        </div>
        <p className="text-[#666] text-lg first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae commodi maxime voluptatum expedita doloribus repellat exercitationem totam delectus corrupti. Perferendis deleniti natus officia vitae et placeat beatae ratione voluptas eaque ex repellendus ullam delectus velit dignissimos sint, labore provident fuga aut illum quas. Ipsum laborum laudantium magni saepe! Voluptatem, ipsa!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae commodi maxime voluptatum expedita doloribus repellat exercitationem totam delectus corrupti. Perferendis deleniti natus officia vitae et placeat beatae ratione voluptas eaque ex repellendus ullam delectus velit dignissimos sint, labore provident fuga aut illum quas. Ipsum laborum laudantium magni saepe! Voluptatem, ipsa!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae commodi maxime voluptatum expedita doloribus repellat exercitationem totam delectus corrupti. Perferendis deleniti natus officia vitae et placeat beatae ratione voluptas eaque ex repellendus ullam delectus velit dignissimos sint, labore provident fuga aut illum quas. Ipsum laborum laudantium magni saepe! Voluptatem, ipsa!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae commodi maxime voluptatum expedita doloribus repellat exercitationem totam delectus corrupti. Perferendis deleniti natus officia vitae et placeat beatae ratione voluptas eaque ex repellendus ullam delectus velit dignissimos sint, labore provident fuga aut illum quas. Ipsum laborum laudantium magni saepe! Voluptatem, ipsa!
        </p>
      </div>
      

      
    </div>
  )
}
