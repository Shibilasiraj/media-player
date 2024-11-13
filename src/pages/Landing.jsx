import React from 'react'
import { Link } from 'react-router-dom'
import LandingImage from '../assets/LandingImage.gif'
import settings from '../assets/settings.png'
import notes from '../assets/notes.png'
import clock from '../assets/clock.jpg'
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <div className="container landingsection">
      <div className='row align-item-center my-5'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem laudantium exercitationem quaerat quam accusamus, laboriosam quas modi ea, magnam possimus laborum iure perspiciatis ipsum consectetur expedita culpa, quidem deserunt?
          Sint officia commodi similique ducimus quia, consectetur ipsam voluptatem ipsum architecto! Suscipit laboriosam, at sit veniam esse, voluptatum velit, a atque laudantium hic delectus! Animi numquam explicabo natus accusantium labore.</p>
          <Link  to={'/home'}className='btn btn-warning'> Get Started</Link>


        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img src={LandingImage} alt=""  style={{height:'100%' ,width:'90%'}} />

        </div>

      </div>
      {/* features */}
       <div className='feature container my-5'>
        <h1 className='text-center text-warning' >Features</h1>
        <div className='row'>
          <div className='col-lg-4'>
          <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={settings} />
         <Card.Body>
         <Card.Title>Managing Videos</Card.Title>
         <Card.Text>
          user can upload ,remove, and view the videos
          </Card.Text>
         </Card.Body>
         </Card>
         </div>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={notes} />
           <Card.Body>
           <Card.Title> Categorized Videos</Card.Title>
           <Card.Text>
            Users can categorize the video by drag and drop features

            </Card.Text>
            </Card.Body>
            </Card>
          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
            <Card.Img   variant="top" src={clock} />
            <Card.Body>
            <Card.Title>Managing History</Card.Title>
            <Card.Text>
              Users can manage the watch history of all video

             
            </Card.Text>
           </Card.Body>
            </Card>
           </div>

        </div>

       

      </div>

      <div className='container my-5 p-5 border border-5 '>
        <div className='row'> 
          <div className='col-lg-6'>
            <h3 className='text-warning'>Simple,Fast and Powerful</h3>
            <div className='d-flex'>
            <p> <h6>Play Everything:</h6>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quaerat omnis .</p>
            </div>
            <div className='d-flex'>
            <p>  <h6>Categorize video:</h6> Lorem ipsum dolor sit amet consectetur.doloribus quis dicta aut dignissimos temporibus rerum quod ipsa sed eum,  cupiditate voluptate!</p>

            </div>
            <div className='d-flex'>
            <p> <h6>Managing History:</h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. doloribus quis dicta aut   doloribus cupiditate sint.</p>


            </div>
          




          </div>
          <div className="col-6 p-10">
          <iframe width="100%" height="369" src="https://www.youtube.com/embed/qWnzMwT6SKo" title="Dhadak - Title Track | Dhadak | Ishaan &amp; Janhvi | Ajay Gogavale &amp; Shreya Ghoshal | Ajay-Atul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
        </div>


       </div>

    </div>
  )
}

export default Landing