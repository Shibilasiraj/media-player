import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../service/allAPI'


function History() {
  const [videoHistory,setVideoHistory]=useState([])
  console.log(videoHistory);
  useEffect(()=>{
    getHistory()

  })
  
  const getHistory=async()=>{
    try{
      const result=await getAllHistory()
      setVideoHistory(result.data);
      
    }
    catch(err){
      console.log(err);
      
    }

  }

  const delHistory=async(videoId)=>{
    try{
      await deleteHistory(videoId)
      getHistory()
    }
    catch(err){
      console.log(err);
      
    }
  }

  return (
    <>
    <div className='container  my-5'>
      <div className='d-flex justify-content-between'>
      <h1 className='text-warning ' >Watch History</h1>
      <Link to={'/home'} style={{color:'primary',textDecoration:'none',fonteSize:'20px'}}>Back to</Link>

      </div>
      <table className='table mt-5'>
        
          <thead>
          <tr>
            <th>Id</th>
            <th> Caption</th>
            <th>Link</th>
            <th>Date</th>
            <th><i class="fa-solid fa-ellipsis"></i></th>
          
           </tr>
          </thead>
          <tbody>

            {
              videoHistory.length>0?
              videoHistory?.map((item,index)=>(
                <tr key={item?.id}>
                  <td>{index+1}</td>
                  <td>{item?.caption}</td>
                  <td><a href={item?.youtubeurl}  target='_blank'>{item?.youtubeurl}</a></td>
                  <th>{item?.formatedDate}</th>
                  <td><button className='btn' onClick={()=>delHistory(item?.id)}><i className="fa-solid fa-trash" style={{color:'red'}}></i></button></td>
                </tr>
              
              )
              )
            :
            <div className='text-danger'>Nothing to display</div>  
            }
          </tbody>
          
        
      </table>
      
      

    </div>
    </>
  )
}

export default History