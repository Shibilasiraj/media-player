import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
  <div  className='container mt-5 w-100' style={{height:'300px'}}>
    <div className='row'>
        <div  className='col-lg-5'style={{width:'400px'}}>
       <h5> <i className="fa-solid fa-music"></i> &nbsp;
       Media Player</h5>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis vitae odio aliquam quos ad fugiat vel, cupiditate suscipit quibusdam voluptas exercitationem temporibus blanditiis alias ea. Vel culpa quo ducimus ullam!</p>
       <p>code is liscenced by Luminar</p>
       <p>currently v5.3.2</p>
        </div>
        <div className='col-lg-2 text center'>
         <h5>Links</h5>
       
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}> Landing</Link></div>
          <div><Link to={'/home'}style={{textDecoration:'none' ,color:'white'}}> Home</Link></div>
          <div>
            <Link to={'/history'}style={{textDecoration:'none' ,color:'white'}}> Watch history</Link>
          </div>
          
      

        </div>
        <div className='col-lg-2'>
          <h5 > Guides</h5>
          <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link></div>
          <div><Link to={'/home'}style={{textDecoration:'none' ,color:'white'}}> React bootstrap</Link></div>
          <div>
            <a href="" style={{textDecoration:'none' ,color:'white'}}> React Router</a>
          </div>
          

        </div>
        <div className="col-lg-3">
          <h5 className='mb-5'>Contact us</h5>
          <div className='d-flex justify-content-between'>
            <input type="text" className='form-control'placeholder='Enter email' />
            <button className='btn btn-warning ms-3'><i class="fa-solid fa-arrow-right-long"></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="" style={{fontSize:'20px', color:'white'}}><i class="fa-brands fa-facebook"></i></a>
            <a href="" style={{fontSize:'20px', color:'white'}}><i class="fa-brands fa-twitter"></i></a>
            <a href="" style={{fontSize:'20px', color:'white'}}><i class="fa-brands fa-instagram"></i></a>
            <a href="" style={{fontSize:'20px', color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
            <a href="" style={{fontSize:'20px', color:'white'}}><i class="fa-brands fa-github"></i></a>
            <a href="" style={{fontSize:'20px', color:'white'}}><i class="fa-solid fa-phone"></i></a>

          </div>



        </div>
    
    </div>
    <p className='text-center mt-4'> Copyright @ july 2024 Batch,Media player, Built with react</p>
   

    
     
  </div>
  )
}

export default Footer