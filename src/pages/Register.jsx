import React from 'react'

export default function Register() {
  return (
    <div className="Register h-[calc(100vh-64px)]  flex flex-col justify-center  bg-cover items-center">
        <span className="loginTitle text-5xl font-semibold">Register</span>
        <form className="registerform mt-5 flex flex-col md:max-w-2xl text-black "> 
            <label>Username</label>
            <input type="email" className="" placeholder="Enter your username..."/>
            <label>Email</label>
            <input type="email" className="" placeholder="Enter your email..."/>
            <label>Password</label>
            <input type="password" className="" placeholder="Enter your password..."/>
            <button className="loginButton mt-5 bg-green-500 hover:bg-green-800 border-none text-white rounded-xl p-2">Register</button>
        </form>
        <button className="loginRegister position absolute top-[90px] right-[30px] bg-red-400 hover:bg-red-800  p-2 rounded-lg text-white">Login</button>
    </div>
  )
}
