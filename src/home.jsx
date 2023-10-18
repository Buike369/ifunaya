import React from 'react'
import "./styles/home.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const home = () => {
  return (
    <div className="Path1">
      <div className="path">
          <div className="HeaderCarosDiv">
          <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div><div className="imgTare"><img src="/img/pic.jpg" alt="" className="tnDp"/></div></div>
  <div><div className="imgTare"><img src="/img/pic1.jpg" alt="" className="tnDp"/></div></div>
  <div><div className="imgTare"><img src="/img/pic2.webp" alt="" className="tnDp"/></div></div>
  <div><div className="imgTare"><img src="/img/pic1.jpg" alt="" className="tnDp"/></div></div>
</Carousel>

          </div>
          <div className="HeaderCarosDiv1">
             <div className="divImg">
                 <div className="upwork"><img src="/img/product.jpg" alt="" className="imgh"/></div>
                 <div className="upwork"><img src="/img/product1.webp" alt="" className="imgh"/></div>
             </div>
             <div  className="divImg marginT" >
                 <div className="upwork"><img src="/img/product2.jpg" alt="" className="imgh"/></div>
                 <div className="upwork"><img src="/img/product3.jpg" alt="" className="imgh"/></div>
             </div>
          </div>
      </div>

      <div className="move move4">

          <div>
              <div className="produDiv1">
                  <div className="produDiv">
                       <img src="/img/ifunayaShop.jpeg" alt="" className="spac"/>
                       <div className="pay am">₦3.00 <span className="pay1 pay3">$400</span></div>
                  </div>
                  <div className="produDiv">
                  <img src="/img/ifunayaShop1.jpeg" alt="" className="spac"/>
                  <div className="pay am">₦3.00 <span className="pay1 pay3">$400</span></div>
                  </div>
                  <div className="produDiv">
                  <img src="/img/ifunayaShop2.jpeg" alt="" className="spac"/>
                  <div className="pay am">₦3.00 <span className="pay1 pay3">$400</span></div>
                  </div>
                  <div className="produDiv">
                  <img src="/img/ifunayaShop3.jpeg" alt="" className="spac"/>
                  <div className="pay am">₦3.00 <span className="pay1 pay3">$400</span></div>
                  </div>
                  <div className="produDiv">
                  <img src="/img/ifunayaShop6.jpeg" alt="" className="spac"/>
                  <div className="pay am">₦3.00 <span className="pay1 pay3">$400</span></div>
                  </div>
                  <div className="produDiv">
                  <img src="/img/ifunayaShop5.jpeg" alt="" className="spac"/>
                  <div className="pay am">₦3.00 <span className="pay1 pay3">$400</span></div>
                  </div>
                  <div className="produDiv">
                  <img src="/img/ifunayaShop6.jpeg" alt="" className="spac"/>
                  <div className="pay am">₦3.00 <span className="pay1 pay3">$400</span></div>
                  </div>
              </div>
          </div>
      
      </div>
      <div className="move">
      {/* <Carousel
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive1}
  ssr={true} // means to render carousel on server-side.
  infinite={false}
  autoPlay={false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
> */}
          <div>
              <div className="produDiv1">
                  <div className="produDiv3">
                       <img src="/img/ifunayaShop7.jpeg" alt="" className="spac2"/>
                       <div className="DescriptionT">In The Long run  In The Long run In The Long run</div>
                       <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  <div className="produDiv3">
                  <img src="/img/ifunayaShop8.jpeg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                 
                  <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  <div className="produDiv3">
                  <img src="/img/ifunayaShop9.jpeg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long runIn The Long run In The Long run</div>
                  <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  <div className="produDiv3">
                  <img src="/img/ifunayaShop10.jpeg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  <div className="produDiv3">
                  <img src="/img/ifunayaShop11.jpeg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  
                 
              </div>
          </div>
          <div>
              <div className="produDiv1">
                  <div className="produDiv3">
                       <img src="/img/ifunayaShop12.jpeg" alt="" className="spac2"/>
                       <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                       <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  <div className="produDiv3">
                  <img src="/img/ifunayaShop.jpeg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  <div className="produDiv3">
                  <img src="/img/ifunayaShop1.jpeg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  <div className="produDiv3">
                  <img src="/img/ifunayaShop2.jpeg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
                  <div className="produDiv3">
                  <img src="/img/ifunayaShop3.jpeg" alt="" className="spac2"/>
                  <div className="DescriptionT">In The Long run In The Long run In The Long run</div>
                  <div className="moneyF">₦3.00 <span className="DiscountP">$4.00</span></div>
                  </div>
               
                
              </div>
          </div>
          {/* </Carousel> */}
      </div>
      <div className="move move4">
          <div>
              <div className="produDiv1">
                  <div className="myD">
                  <div className="produDiv4">
                       <img src="/img/ifunayaShop4.jpeg" alt="" className="spac"/>
                        <div className="pay">₦3.00 </div>
                  </div>
                  <div className="produDiv4">
                  <img src="/img/ifunayaShop5.jpeg" alt="" className="spac"/>
                   <div className="pay">₦3.00 </div>
                  </div>
                  <div className="produDiv4">
                  <img src="/img/ifunayaShop6.jpeg" alt="" className="spac"/>
                 <div className="pay">₦3.00 </div>

                  </div>
                  </div>
                  <div className="myD">
                  <div className="produDiv4">
                  <img src="/img/ifunayaShop7.jpeg" alt="" className="spac"/>
                 
                   <div className="pay">₦3.00 </div>
                  </div>
                  <div className="produDiv4">
                  <img src="/img/ifunayaShop8.jpeg" alt="" className="spac"/>
                 
                   <div className="pay">₦3.00</div>
                  </div>
                  <div className="produDiv4">
                  <img src="/img/ifunayaShop9.jpeg" alt="" className="spac"/>
                 
                <div className="pay">₦3.00 </div>
                  </div>
                  </div>
                
              </div>
          </div>

      </div>

      <div className="path">
          <div className="HeaderCarosDiv">
        
  <div><div className="imgTaren"><img src="/img/pic.jpg" alt="" className="tnDp"/></div></div>
 
  
  


          </div>
          <div className="HeaderCarosDiv1">
             <div className="divImg">
                 <div className="upwork3"><img src="/img/product.jpg" alt="" className="imgh"/></div>
                 <div className="upwork3"><img src="/img/product1.webp" alt="" className="imgh"/></div>
             </div>
             
          </div>
      </div>

      <div className="firstB">
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop10.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦3000.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop11.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦4500.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/What.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦3000.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop1.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦4500.00</div>
              <div>brown yellow slipper</div>

          </div>

    
    
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop2.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop3.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop11.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/What.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦3000.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop9.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>

      
    
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop5.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop6.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop7.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop8.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/ifunayaShop9.jpeg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">₦400.00</div>
              <div>brown yellow slipper</div>

          </div>

      </div>
      {/* <div className="firstB">
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/yee.jpg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">$400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/yee.jpg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">$400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/yee.jpg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">$400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/yee.jpg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">$400.00</div>
              <div>brown yellow slipper</div>

          </div>
          <div className="itemsdiv">
              <div className="itemsDv">
              <img src="/img/yee.jpg" alt=""   className="itemsdivImg"/>
              </div>
              <div className="browm"> Brown yellow slipper Brown yellow slipper Brown yellow slipper </div>
              <div className="moneyPo">$400.00</div>
              <div>brown yellow slipper</div>

          </div>

      </div> */}




    </div>
  )
}

export default home