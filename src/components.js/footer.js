import React from 'react'
import logo from "./logo.png"
import instagram from "./instagram.png"
import facebook from "./facebook.png"
import twitter from "./twitter.png"
function footer() {
  return (
    <div><footer className='d-flex text-light mt-5 container-fluid ' style={{backgroundImage:`linear-gradient(to left,transparent,#161853)`}}>
    <div className='row row-cols-md-4 row-cols-sm-2 row-cols-1 d-flex' style={{justifyContent:'space-around'}}>
      <div className='col'><img className='mt-3' src={logo} style={{width:'10rem', borderRadius:'50%'}}></img></div>
        <div className='col'>
          <h5 style={{textDecoration:'underline'}}>Corporate office</h5>
          <p>Sapphires hotel stay H. No. 189, Mazal Wado, Assagao Bardez Goa near Central Bank</p>
          <p>© 2019 SAPPHIRES HOTEL<br></br>ALL RIGHTS RESERVED.<br></br>DEVELOPED BY RUBIQ</p>
        </div>
        <div className='col'>
        <h5 className='mb-4 mt-4' style={{textDecoration:'underline'}}>For Enquries</h5>
          <p>T:<a href="tel:+1800-4190-786">+1800-4190-786</a></p>
          <p>M:<a href="M:9000231234">9000231234</a></p>
          <p>E:<a href="mailto:9000231234">Sapphireshotel@gmail.com</a></p>
          <p href="#">
          </p>
        </div>
        <div className='col'>
          <h5 className='mb-4 mt-4' style={{textDecoration:'underline'}}>Quick Links</h5>
          <a href='https://www.instagram.com/' className='me-3' target={"_blank"}><img src={instagram}></img></a>
          <a href='https://www.facebook.com/' className='me-3' target={"_blank"}><img src={facebook}></img></a>
          <a href='https://twitter.com/' target={"_blank"}><img src={twitter}></img></a>
        </div>
      </div>

    </footer></div>
  )
}

export default footer