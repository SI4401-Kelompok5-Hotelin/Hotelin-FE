import { data } from 'autoprefixer'
import React from 'react'
import hotelkecil from '../../asset/hotelkecil.png'

export default function HistoryPayment() {

    data = [
        {
            duration:'Des 6, 2022 - Des 10, 2022',
            name:'Mulia Senayan',
            roomname:'Splendor City View'
        },
        {
            duration:'Des 6, 2022 - Des 10, 2022',
            name:'A&B Hotel',
            roomname:'Splendor City View'
        },
        {
            duration:'Des 6, 2022 - Des 10, 2022',
            name:'Grand Deluna',
            roomname:'Splendor City View'
        }
    ]

  return (
    <div className='flex justify-center pb-32'>
        <div>
            <h1 className='text-[25px] font-semibold mt-[140px]'>History Transaction</h1>
            <div className='justify-center flex flex-col mt-[60px] gap-5'>
                {data.map((item, index) => {
                    return (
                    <div className='w-[1266px] h-[320px] bg-[#f4f4f4] rounded-lg flex justify-between p-3' key={index}>
                        <div className='flex w-max-content'>
                            <img src={hotelkecil} className="ml-3" alt='hotel' />
                            <div className='items-start justify-start flex-col ml-[25px] flex'>
                                <h1 className='font-bold text-[25px] text-start'>{item.duration}</h1>
                                <h1 className='font-medium text-[25px] mt-[15px] '>Hotel</h1>
                                <h1 className='font-medium text-[25px] '>{item.name}</h1>
                                <h1 className='font-bold text-[25px] mt-3'>{item.roomname}</h1>
                            </div>
                        </div>
                        <h1 className='text-[#91C60B] font-semibold text-[25px]'>IDR. 8.000.000</h1>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
