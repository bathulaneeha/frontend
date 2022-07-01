import pic10 from "./pic10.png"
import pic11 from "./pic11.png"
import pic12 from "./pic12.png"
import pic13 from "./pic13.png"
function cusines(){
    return(
    <div>
         <div className="row row-cols-sm-1 row-cols-md-2 row-cols-1 container-fluid">
         <div className="hover14">
            <figure><img src={pic11} className="mt-5 col w-100 h-100 mx-auto im1"/></figure>
        </div>
            {/* <img src={pic11} className="mt-5 col w-50 mx-auto im1"></img> */}
            <div className="col mt-5">
                <h1 className=" head2 text-dark">Dining on the water</h1>
            <p className="ms-5 mt-5 about">Traveling the world and experiencing the different cultures and cuisines is something we all dream about.When we’re at our best, we want to eat the best. Fortunately, the world’s most beautiful beaches are culturally and ecologically diverse, with thriving culinary scenes based on sustainably sourced seafood.It’s perfectly acceptable to spend the entire day soaking in the sun at Club Dauphin, a poolside restaurant perched on the Mediterranean cliffs</p>
            <button class="btn shadow mx-auto text-light d-block" data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#333C83'}}>CHECK RATES AND AVAILABILITY</button>
            </div> 
        </div>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-1 container-fluid">
            <div className="col mt-5">
                <h1 className="head2 text-dark">Bleu </h1>
            <p className="ms-5 mt-5 about">Lunch and dinner are complemented by ocean views at Bleu, a modern Mediterranean brasserie. Overlooking the Atlantic coastline and the grand El Hank lighthouse, the restaurant celebrates local seafood with a menu of fresh fish handpicked daily by Executive Chef Thierry Papillier, who visits the seaside fish markets himself.</p>
            <button class="btn shadow mx-auto text-light d-block" data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#333C83'}}>CHECK RATES AND AVAILABILITY</button>
            </div> 
            
            <div className="hover14">
            <figure><img src={pic12} className="mt-5 col w-100 h-100 mx-auto im1"/></figure>
        </div>
        </div>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-1 container-fluid">
        <div className="hover14">
            <figure><img src={pic10} className="mt-5 col w-100 h-100 mx-auto im1"/></figure>
        </div>
            <div className="col mt-5">
                <h1 className="head2 text-dark">Club Dauphin on the French Sapphires</h1>
            <p className="ms-5 mt-5 about">In preparation for the Mid-Ocean, you’ll sail from the island shore of Landaa to a floating platform in a quiet lagoon. Surrounded by water, sip Champagne and savour locally caught reef fish such as tuna, barramundi, grouper and jackfish.</p>
            <button class="btn shadow mx-auto text-light d-block" data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#333C83'}}>CHECK RATES AND AVAILABILITY</button>
            </div> 
        </div>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-1 container-fluid">
            <div className="col mt-5">
                <h1 className="head2 text-dark">A private cove</h1>
            <p className="ms-5 mt-5 about">Once in a blue moon, you find a destination so peaceful, so beautiful and so romantic that you want to make it yours, if only for a night. The Private Cove at our stay is that place; and during the Once in a Blue Moon Dinner, it’s all yours.</p>
            <button class="btn shadow mx-auto text-light d-block" data-bs-toggle="modal" data-bs-target="#m1" style={{backgroundColor:'#333C83'}}>CHECK RATES AND AVAILABILITY</button>
            </div> 
            <div className="hover14">
            <figure><img src={pic13} className="mt-5 col w-100 h-100 mx-auto im1"/></figure>
        </div>
        </div>
    </div>
    )
}
export default cusines;