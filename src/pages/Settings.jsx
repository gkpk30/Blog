import Sidebar from "../components/Sidebar";
import {FaUserCircle} from 'react-icons/fa'
import manSuit from "../assets/images/man-suit-gray-min.jpeg"



export default function Settings() {
  return (
    <div className="settings flex max-w-7xl m-auto">
        
        <div className="settingsWrapper sm:px-6 lg:max-w-[50rem] lg:px-8 flex gap-5 flex-[9] flex-col  ">
            <div className="settingsTitle flex justify-between items-center flex-[6]">
                <span className="settingsUpdateTitle text-3xl mb-5 text-red-700">Update Your Account</span>
                <span className="settingsUpdateTitle  text-xs text-red-700" >Delete Your Account</span>
            </div>
            
            <form className="settingsForm flex flex-col flex-[3]">
                <label>Profile Picture</label>
                <div className="settingsPP flex items-center mx-3">
                    <img
                        src={manSuit}
                        alt=""
                        className="w-20 h-20 rounded-lg object-cover"
                    />
                    <label htmlFor="fileInput" className="bg-red-400 text-white rounded-full ml-2">
                        <i className="text-3xl "><FaUserCircle/></i>
                    </label>
                    <input type="file" id="fileInput"  className="hidden"/>
                </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Kooms"/>
                    <label>Email</label>
                    <input type="email" placeholder="gnkdevelopment@gmail.com"/>
                    <label>Password</label>
                    <input type="password" placeholder="Kooms"/>
                    <button className="settingsSubmit w-32 self-center rounded-xl border-none bg-green-500 hover:bg-lime-700 text-white p-2">Update</button>
            </form>
        </div>
        <div className="flex-[3]" >
        <Sidebar />
        </div>
        


    </div>
  )
}
