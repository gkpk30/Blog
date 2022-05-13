import React from 'react'

// bg-[url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')] 
export default function Login() {
  return (
    <div className="Login h-[calc(100vh-64px)]  flex flex-col justify-center  bg-cover items-center ">
        <span className="loginTitle text-5xl font-semibold">Login</span>
        <form className="loginform mt-5 flex flex-col md:max-w-2xl font-medium"> 
            <label>Email</label>
            <input type="email" className="" placeholder="Enter your email..."/>
            <label>Password</label>
            <input type="password" className="" placeholder="Enter your password..."/>
            <button className="loginButton mt-5 bg-red-400 hover:bg-red-800 border-none text-white rounded-xl p-2">Login</button>
        </form>
        <button className="loginRegister position absolute top-[90px] right-[30px] bg-green-500 hover:bg-green-800 p-2 rounded-lg text-white">Register</button>
    </div>
  )
}
