import React from 'react'
import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar,faTruck,faCreditCard} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faTwitter,faLinkedin,faTelegram,faYoutube,}from '@fortawesome/free-brands-svg-icons'


const footer = () => {

  return (
    <div className="BT" >
         <div className="footerDiv">
             <div className="divFlex">
             <div className="ValU"><FontAwesomeIcon icon={faSackDollar}  className="paaIcon pp1 ww"/></div>
                 <div className="ValU Val1 pp">Great value</div>
                 <p className="ValU pp2">We offer competitive prices on over 100 million items</p>

             </div>
             <div className="divFlex">
            <div className="ValU"> <FontAwesomeIcon icon={faTruck}  className="paaIcon pp1"/></div>
                 <div className="ValU Val1 pp">Worldwide shopping</div>
                 <p className="ValU pp2">We ship to over 200 countries and regions, and our site comes in 12 languages.</p>

             </div>
             <div className="divFlex">
             <div className="ValU"><FontAwesomeIcon icon={faCreditCard}  className="paaIcon pp1"/></div>
                 <div className="ValU Val1 pp">Safe payment</div>
                 <p className="ValU pp2">Pay with the world’s most popular and secure payment methods.</p>

             </div>
             <div className="divFlex">
             <div className="ValU"><FontAwesomeIcon icon={faTruck}  className="paaIcon pp1"/></div>
                 <div className="ValU Val1 pp">Shop with confidence</div>
                 <p className="ValU pp2">Our Buyer Protection policy covers your entire purchase journey.</p>

             </div>
             <div className="divFlex">
             <div className="ValU"><FontAwesomeIcon icon={faTruck}  className="paaIcon pp1"/></div>
                 <div className="ValU Val1 pp">Help center</div>
                 <p className="ValU pp2">Round-the-clock assistance for a smooth shopping experience</p>

             </div>
             <div className="divFlex1">
             <div className="ValU"><FontAwesomeIcon icon={faTruck}  className="paaIcon pp1"/></div>
                 <div className="ValU Val1 pp">Shop better</div>
                 <p className="ValU pp2">Download the app for mobile-only features such as image search and discount games.</p>

             </div>
         </div>

         <div className="FOOTDIV">
             <div className="kit">
                 <ul className="Tik">
                     <li><div className="Stay">Stay Connected</div></li>
                     <li><a href="#" >Facebook</a></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">LinkedIn</a></li>
                     <li><a href="#"> Telegram</a></li>
                     <li><a href="#">WhatsApp</a></li>
                     <li><a href="#">Youtube</a></li>
                 </ul>
             </div>
             <div className="kit">
                 <ul className="Tik">
                     <li><div className="Stay">Contact Us</div></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">TiktokTiktok</a></li>
                     <li><a href="#">Tiktok</a></li>
                 </ul>
             </div>
             <div className="kit">
                 <ul className="Tik">
                     <li><div className="Stay">About Us</div></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">Tiktok</a></li>
                 </ul>
             </div>
             <div className="kit">
                 <ul className="Tik">
                     <li><div className="Stay">Payments</div></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">Tiktok</a></li>
                     <li><a href="#">Tiktok</a></li>
                 </ul>
             </div>
             <div className="Kit1">
                 <form>
                    <div className="EmailUs">Email Us</div>
                    <div><input type="email" placeholder="enter ur email"  className="enter"/>
                     <button className="enter1">Subscribe</button>
                     </div> 
                 </form>


                 <div>
                     <p className="Visit">Visit our social handles</p>
                     <div className="IconDivMm">
                     <ul className="IconDivMm">
                              <li><a href="https://www.facebook.com/Earnarshub?mibextid=ZbWKwL" className="twww"><FontAwesomeIcon icon={faFacebook} className="icon_brand_size2"/></a></li>
                              
                              
                              
                              <li><a href="https://twitter.com/EranarsC?t=PS1iorx90FTh_zG6FMqHVg&s=09" className="twww"><FontAwesomeIcon icon={faTwitter} className="icon_brand_size2 Ferm" /></a></li>
                              <li><FontAwesomeIcon icon={faLinkedin} className="icon_brand_size2 Ferm" /></li>
                              <li><a href="https://t.me/earnarshub" className="twww"><FontAwesomeIcon icon={faTelegram} className="icon_brand_size2 Ferm" /></a></li>
                              <li><a href="https://www.youtube.com/@Earnars" className="twww"><FontAwesomeIcon icon={faYoutube} className="icon_brand_size2 Ferm" /></a></li>
                              </ul>
                     </div>
                 </div>
             </div>
         </div>
             <div className="Marat">©️ 2023 Marat,All right reserved</div>
    </div>
  )
}

export default footer