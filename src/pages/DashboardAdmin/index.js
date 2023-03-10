import React from 'react'
import Sidebar from '../../components/Sidebar'
import TableListHotel from '../../components/tableListHotel'
import TotalHotel from '../../components/totalHotel'

export default function DashboardAdmin() {
  return (
    <div className='flex bg-white'>
      <Sidebar/>
      <div className='ml-[300px]'>
        <TotalHotel />
        <TableListHotel />
      </div>
    </div>
  )
}
