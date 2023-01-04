import { data } from 'autoprefixer'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
export default function UpdateProfile() {
  return (
    <div className='w-screen container flex justify-center'>
        <div className='flex flex-col justify-center'>
            <CgProfile className='w-[80px] h-[80px] flex mx-auto' />
            <h1 className='text-[#3cc7db] mt-[21px] font-medium'>Change Photo</h1>
            <label for="nama" className='flex justify-start mt-[60px]'>Nama Lengkap</label>
            <input 
                className='w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]'
                placeholder=''
                type='text'
                id='nama'
            />
            <label for="email" className='flex justify-start mt-[18px]'>Email</label>
            <input 
                className='w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]'
                placeholder=''
                type='text'
                id='email'
            />
            <label for="noHP" className='flex justify-start mt-[18px]'>Nomor HP</label>
            <input 
                className='w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]'
                placeholder=''
                type='text'
                id='noHP'
            />
            <label for="alamat" className='flex justify-start mt-[18px]'>Alamat</label>
            <input 
                className='w-[1069px] h-[50px] border-[3px] rounded-[10px] border-black mt-[8px] pl-3 placeholder:font-base placeholder:text-[20px]'
                placeholder=''
                type='text'
                id='alamat'
            />
            <h1 className='text-[#f6152b] mt-[42px] font-medium'>Change Password</h1>
        </div>
    </div>
  )
}
