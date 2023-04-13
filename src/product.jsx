import React from 'react'
import "./styles/product.css"
import "./styles/home.css"
import Carousel from "react-multi-carousel";

const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const product = () => {
  return (
    <div>
        <div className="DeFa">
        <div className="ProductDetail">
            <div className="itemOn">
                <div className="ProductBDetail2">
                    <div className="ProductBDetail">
                        <img src="/img/Slipee.jpg_-1.webp" alt="SlippersImg" className="kin" />
                        <div className="">
                            <div><img src="/img/Slip.webp" alt="SlippersImg" className="" /></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="Summer">
                        <p className="">Jumpmore Summer Flip Flops Men Shoes Outdoor Fashion PU Leather Flat Shoes Beach Holiday Shoes Size 40-50</p>
                        <p className="earnP">Earn 10% off coupon</p>
                        <div> <span className="">18 Reviews
263 orders
</span></div>
 <div className="DivMoney">
     <p className="deals">Welcome Deals</p>
<div className="MoneyDiv">
                <p className="MoneyDiv1" >US $2.5</p>
                <p className="MoneyDiv4"><span className="MoneyDiv2">US $24.5</span><span className="MoneyDiv3">67% off</span></p>
           </div>
           </div>
           <div className="CBlack"></div>
           <p className="ColorSelection">Color: Black</p>
                   <div className="fadam">
                       <div className=""><img src="/img/Slip.webp" alt="SlippersImg" className="" /></div>
                       <div className=""><img src="/img/Slip.webp" alt="SlippersImg" className="" /></div>
                       <div className=""><img src="/img/Slip.webp" alt="SlippersImg" className="" /></div>

                   </div>
                   <p className="Sizes">Shoe Size: 11</p>
                   <div className="YTere">
                       <div className="vanad">6</div>
                       <div className="vanad">8</div>
                       <div className="vanad">10</div>
                       <div className="vanad">12</div>
                       <div className="vanad">14</div>
                   </div>
                   <p>Quantity:</p>
                   <div className="YTere">
                       <div className="increment">-</div>
                       <div className="increment">2</div>
                       <div className="increment">+</div>
                       <div className="most"> <div className="increment"> 1</div><div className="custome">pieces at most per custome</div> </div>
                   </div>
                   <div className="shipto">Ship to location icon Abia</div>
                   <div classname="fee">shipping Fee</div>
                   <p className="delivery">delivery by Mar22</p>
                   <div className="BuyWon">
                       <div className="nowBuy">Buy Now</div>
                       <div className="nowBuy" >Add To Cart</div>
                       <div >love icon 5</div>
                   </div>

                    </div>
                </div>

         
          <div className="pilicyt2">
              <div className="pilicyt">
                  <div className="pilicyt1">Description</div>
                  <div className="pilicyt1">Customer review</div>
                  <div className="pilicyt1">Specification</div>
                  <div className="pilicyt1">Warranty</div>
                  <div className="pilicyt1">Return Policy</div>
              </div>
              <div className="ageOf">
              LOKI RXTON I In the age of 40+ new materials, a combination of power and spin will pose great challenges. RXTON 1 rubber is made of a classic high-density sponge that is preset and bottomed, with a sufficient bottom base and long pull ball arc line. 15cm X 10cm

It is fitted with a fine medium-viscous rubber surface, to ensure fast ball serve while improving the ability to generate spin. RXTON 1 has a high fault tolerance rate, and it is equipped with very strong performance stability, especially suitable for hand five-layer plywood, seven-layer plywood, and fiberboard. 
              </div>
          </div>
          {/* <div>
              <div>
                  <img src="" alt="" />
                  <p></p>
                  <p>US $11.00</p>
                  <p>10 views</p>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div> */}

          <div className="move paddbv">
              <div className="ducts">Related Products</div>
      <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive1}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
          
            
                 <div className="pine">
                  <div className="produDiv3 sava">
                  <img src="/img/load1.jpg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                 
                  <div className="moneyF">$3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  </div>
                  <div className="pine">
                  <div className="produDiv3 sava">
                  <img src="/img/load2.jpg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long runIn The Long run In The Long run</div>
                  <div className="moneyF">$3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  </div>
                  <div className="pine">
                  <div className="produDiv3 sava">
                  <img src="/img/load3.png" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">$3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  </div>
                  <div className="pine">
                  <div className="produDiv3 sava">
                  <img src="/img/load4.jpg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">$3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  </div>
                  
                 
        
                 <div className="pine">
                  <div className="produDiv3 sava">
                  <img src="/img/load2.jpg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">$3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  </div>
                  <div className="pine">
                  <div className="produDiv3 sava">
                  <img src="/img/load.jpg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">$3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  </div>
                  <div className="pine">
                  <div className="produDiv3 sava">
                  <img src="/img/load3.png" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">$3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  </div>
                  <div className="pine">
                  <div className="produDiv3 sava">
                  <img src="/img/load.jpg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">$3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  </div>
               
                
          
          
          </Carousel>
      </div>
            </div>
            <div className="itemOn1">

            </div>
        </div>
        </div>
    </div>
  )
}

export default product