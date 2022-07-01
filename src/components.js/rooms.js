import Carousel from 'react-bootstrap/Carousel'
import pic1 from "./pic1.png"
import pic2 from "./pic2.png"
import pic3 from "./pic3.png"
import pic4 from "./pic4.png"
import pic5 from "./pic5.png"
import pic6 from "./pic6.png"
import pic7 from "./pic7.png"
import pic8 from "./pic8.png"
import pic9 from "./pic9.png"
function rooms(){
    return(
        <div>
            <div className="d-lg-flex m-5">
            <img src="https://maravilha.in/wp-content/uploads/2019/02/MUB07590_1.jpg" className="w-100"></img>
            <div>
                <h1 className="ms-5 head2 text-dark">King Room with Garden and Beack views</h1>
            <p className="ms-5 mt-5 about">For those of us who don’t get enough nature in the cities, a room with a view of the expansive front yard lawns and beaches is just what you need. Since Sapphire is located in a serene residential area and our backyard opens to a lush forest, don’t be surprised if a Purple Sunbird swoops on to your balcony or wake up under the gaze of a curious squirrel. These are a few of the unexpected treats you can expect in beautiful Assagao.</p>
            </div> 
        </div>
        <p className='display-6 text-center'>LUXURY ACCOMODATION</p>  
        <div className="row row-cols-sm-1 row-cols-md-3 container-fluid">
        <div className='col'>
        <div className="card p-4 w-100" style={{borderRadius:'2%'}}>
        <Carousel fade  className="card-img-top" style={{height:'50%'}}>
        <Carousel.Item interval={1500} style={{objectFit:'cover'}}>
          <img
            className="d-block w-100"
              src={pic4}
            alt="Image One"
            style={{objectFit:'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
                src={pic5}
            alt="Image Two"
            style={{objectFit:'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item style={{objectFit:'cover'}}>
          <img
            className="d-block w-100"
                src={pic6}
            alt="Image Two"
            style={{objectFit:'cover'}}
           />
        </Carousel.Item>
      </Carousel>
        <div className="card-body">
          <p className="card-title h2 head1 text-dark">Sapphires one</p>
          <p className='text1 mt-3'>These elegant rooms bring together sophisticated décor with smooth efficiency featuring a spacious balcony.</p>
          <p className='text-center lead text2'>Tea & Coffee Ensemble</p>
          <p className='text-center text2'>Cost:4000 per day</p>
          <button class="btn shadow mx-auto text-light d-block" data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#333C83'}}>BOOK NOW</button>
        </div>
      </div>
      </div>
      <div className='col'>
        <div className="card p-4 w-100" style={{borderRadius:'2%'}} >
        <Carousel fade  className="card-img-top" style={{height:'50%'}}>
        <Carousel.Item style={{objectFit:'cover'}}>
          <img
            className="d-block w-100"
              src={pic9}
            alt="Image One"
            style={{objectFit:'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
                src={pic8}
            alt="Image Two"
            style={{objectFit:'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item style={{objectFit:'cover'}}>
          <img
            className="d-block w-100"
                src={pic7}
            alt="Image Two"
            style={{objectFit:'cover'}}
           />
        </Carousel.Item>
      </Carousel>
      <div className="card-body">
          <p className="card-title h2 head1 text-dark">Luxury Suite</p>
          <p className='text1 mt-3'>Endless space and a feeling of quiet splendour mark these rooms as being truly exceptional. Digital controls of the amenities.</p>
          <p className='text-center lead text2'>Daily breakfast</p>
          <p className='text-center text2'>Cost:5000 per day</p>
          <button class="btn shadow mx-auto text-light d-block" data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#333C83'}}>BOOK NOW</button>
        </div>
      </div>
      </div>
      <div className='col'>
        <div className="card p-4 w-100"style={{borderRadius:'2%'}} >
        <Carousel fade  className="card-img-top" style={{height:'50%'}}>
        <Carousel.Item style={{objectFit:'cover'}}>
          <img
            className="d-block w-100"
              src={pic1}
            alt="Image One"
            style={{objectFit:'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
                src={pic2}
            alt="Image Two"
            style={{objectFit:'cover'}}
          />
        </Carousel.Item>
        <Carousel.Item style={{objectFit:'cover'}}>
          <img
            className="d-block w-100"
                src={pic3}
            alt="Image Two"
            style={{objectFit:'cover'}}
           />
        </Carousel.Item>
      </Carousel>
      <div className="card-body">
          <p className="card-title h2 head1 text-dark">Sapphires Exclusive</p>
          <p className='text1 mt-3'>For long-staying guests, a choice of one or two bedrooms, with a sitting room, dining area and kitchenette.</p>
          <p className='text-center lead text2'>Buffet breakfast</p>
          <p className='text-center text2'>Cost:6000 per day</p>
          <button class="btn shadow mx-auto text-light d-block" data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#333C83'}}>BOOK NOW</button>
        </div>
      </div>
      </div>
      </div>
     </div>
    )
}
export default rooms;