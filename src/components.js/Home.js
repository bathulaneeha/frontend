import Carousel from 'react-bootstrap/Carousel'
import logo from "./logo.png"
import home1 from "./home1.png"
import home2 from "./home2.png"
import home3 from "./home3.png"
import Cards from "./cards"
import{Link,useNavigate} from 'react-router-dom';
function Home(){
    return(
        <div>
          {/* carousel intro */}
            <Carousel fade style={{height:'50%'}}>
        <Carousel.Item interval={1500} style={{objectFit:'cover'}}>
          <img
            className="d-block w-100"
              src={home3}
            alt="Image One"
            style={{objectFit:'cover'}}
          />
           <Carousel.Caption>
           <p className='display-2 captn'>SAPPHIRES</p>
           <p className='display-6'>We are different shades of perfection</p>
           
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
                src={home2}
            alt="Image Two"
            style={{objectFit:'cover'}}
          />
           <Carousel.Caption>
      <h3 className='ms-5 me-5 captn display-3' style={{color:'#1DCED8'}}>Our kind of MONDAY BLUES</h3>
    </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500} style={{objectFit:'contain'}}>
          <img
            className="d-block w-100"
                src={home1}
            style={{objectFit:'cover'}}
           />
           <Carousel.Caption>
           <p className='display-3 captn' style={{color:'#F6490D'}}>Paradise found!</p>
           </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className='text-center display-1 head text-dark'>Sapphires</p>
      <p className='text-center display-6'>Live the suite life</p>
      {/* cards for specifications */}
      <Cards/>
    </div>  
    )
}
export default Home;