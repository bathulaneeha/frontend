import React from 'react'

function cards() {
    var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}
  return (
    <div>
        <div className="row row-cols-sm-1 row-cols-md-3 row-cols-1 container-fluid">
        {/* card1 */}
        <div className='col'>
        <div className="card p-4 w-100" >
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/38bmeliazanzibar-romancepavillionbyday-1517327762.jpg" className="card-img-top"/>
        <div className="card-body">
          <p className="card-title h1 head text-dark">Rooms</p>
          <p className="card-text" style={{textDecoration:'underline',fontSize:'larger',color:'#874356'}}>King rooms with Beach Views</p>
          <p className='text'>For those of us who don’t get enough nature in the cities, a room with a view of the expansive beach is just what you need. Since Sapphires is located in a serene residential area and our backyard opens to a lush forest, don’t be surprised if a Purple Sunbird swoops on to your balcony or wake up under the gaze of a curious squirrel. </p>
          <button className="btn shadow border-secondary text-light d-block" style={{backgroundColor:'#874356'}}><a href='./rooms' className='text-light'>Specifications</a></button>
        </div>
      </div>
      </div>
      {/* card2 */}
      <div className='col'>
        <div className="card p-4 w-100" >
        <img src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/deliveries-and--takeaways/desktop/goumet-couch.png" className="card-img-top"/>
        <div className="card-body">
          <p className="card-title h1 head text-dark">Cusine</p>
          <p className="card-text" style={{textDecoration:'underline',fontSize:'larger',color:'#874356'}}>Savour the best cuisines</p>
          <p className='text'>Get all the pampering you deserve with our all inclusive package. Includes all daily meals, Wi-Fi & more. All you need to do is sit back and unwind.We live in a globalized world, which means you are bound to serve a wide range of our customers with all our efforts.</p>
          <button className="btn ripple shadow border-secondary text-light d-block " data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#874356'}} ><a href='./cusines' className='text-light'>Specifications</a></button>
        </div>
      </div>
      </div>
      {/* card3 */}
      <div className='col'>
        <div className="card p-4 w-100" >
        <img src="https://d2np4vr8r37sds.cloudfront.net/article/11558-ggpetsohao-1571139924.jpg" className="card-img-top"/>
        <div className="card-body">
          <p className="card-title h1 head text-dark">Events</p>
          <p className="card-text" style={{textDecoration:'underline',fontSize:'larger',color:'#874356'}}>Enjoy the events on the Beach</p>
          <p className='text'>Corporate parties, Holiday parties, graduation celebrations, birthday parties, and any other event; Lovers Key is the place for “Anything Fun Under the Sun!!!”.The gazebo on the beach is a surreal location with the most incredible views that will make your celebration be the talk of your friends.We love to join you people.</p>
          <button className="btn shadow border-secondary text-light d-block" data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#874356'}}><a href='./events' className='text-light'>Specifications</a></button>
        </div>
      </div>
      </div>
      </div>
      <p className='text-center container about'>Presenting a 200 year old heritage home which not very long time ago was the home of a Goan landlord, Mr. Francisco Xavier Saldanha.  The name sapphire is derived from the Latin "saphirus" and the Greek "sapheiros", both of which mean blue – a beautifully restored Boutique resort in North Goa.

Sapphires boasts of 14 luxurious designer rooms, a large dining room, a lounge / living room, an in-house restaurant, a swimming pool and perfectly manicured lawns of more than 25,000 sq. ft.

At Sapphire, the safety of our guest is of utmost importance. We make sure that during your stay with us, no other guests will be allowed on the property.

Located in the trendy and culturally enriching village of Assagao, Sapphires offers you the perfect opportunity to have your celebrations or reunions in the “Beverly Hills of Goa” making memories that last forever!</p>
      
        </div>
  )
}

export default cards