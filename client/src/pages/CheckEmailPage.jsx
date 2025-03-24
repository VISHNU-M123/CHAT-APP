import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios';
import toast from 'react-hot-toast'
import { LuCircleUserRound } from "react-icons/lu";

const CheckEmailPage = () => {

  const [data, setData] = useState({
    email:'',
  })

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const {name, value} = e.target

    setData((prev) => {
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const URL = `${import.meta.env.VITE_BACKEND_URL}/api/email`

    try {
      const response = await axios.post(URL,data)
      toast.success(response.data.message)

      if(response.data.success){
        setData({
          email:'',
        })
        navigate('/password',{
          state: response?.data?.data
        })
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>

        <div className='w-fit mx-auto mb-2'>
          <LuCircleUserRound size={80}/>
        </div>
        <h3>Welcome to Chat App</h3>
    
        <form action="" className='grid gap-4 mt-3' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' placeholder='enter your email' className='bg-slate-100 px-2 py-1 focus:outline-[#00acb4]' value={data.email} onChange={handleOnChange} required />
          </div>
    
          <button className='bg-[#00acb4] text-lg px-4 py-1 hover:bg-[#058187] rounded mt-2 font-bold text-white leading-relaxed tracking-wide cursor-pointer'>Let's Go</button>
        </form>
    
        <p className='my-3 text-center'>New User ? <Link to={'/register'} className='hover:text-[#00acb4] font-semibold'>Register</Link></p>
      </div>
    </div>
  )
}

export default CheckEmailPage
