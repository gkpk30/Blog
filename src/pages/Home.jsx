import React, {useState, useEffect} from 'react' 
import Header from '../components/Header'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import axios from 'axios';




export default function Home() {

 

  const [post, setPost] = useState([]);

  useEffect(()=>{
    const fetchPosts = async ()=> {
      try{
        console.log("In Axios")
        const res = await axios.get("/posts")
        console.log("response:", res.data);
      }
      catch (error) {
        console.error(error)
      }
      

    }

    fetchPosts()
  }, [])

  return (
    <div>
        <Header/>
        <div className="py-6">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-[120rem] lg:px-8 lg:grid lg:grid-cols-12 lg:gap-5">
          
              <Posts/>
              <Sidebar/>
          
        </div>
      </div>
    </div>
  )
}
