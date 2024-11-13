import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from './Components/Category'
import { Link } from 'react-router-dom'


function Home() {

  const [addVideoResponse,setAddVideoResponse]=useState("")


  return (
    <>
    <div className='container m-5 d-flex justify-content-between'>
      <Add setAddVideoResponse ={setAddVideoResponse} />
      <Link to={"/history"} className='text-info fw-bold fs-5' style={{textDecoration:"none"}}>Watch History</Link>
    </div>

     <div className='row m-5'>
      <div className='col-lg-6'>
        <h3 className='text-warning'>All Videos</h3>
        < View addVideoResponse={addVideoResponse} />
      </div>

      <div className='col-lg-6'>
        < Category />
      </div>
    </div> 

    </>
  )
}

export default Home