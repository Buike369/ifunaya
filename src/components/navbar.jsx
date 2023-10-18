import React from 'react'
import "../styles/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faAngleDown,faAngleUp,faCartShopping} from '@fortawesome/free-solid-svg-icons'

const navbar = () => {
  return (
    <div>
        <div className="Navbarbackgound">
        <div className="Navbar">
        <ul className="Navbarlist header">
            <li className="Navbarli"><div>NIvie</div></li>
            {/* <li className="Navbarli"><div className="nabb">Services</div></li> */}
            <li className="Navbarli2">
                <div>
                    <form className="NavbarSearch">
                        <input type="search" placeholder = "search for products" className="search"/>
                        <button className="BtnSearch"><FontAwesomeIcon icon={faMagnifyingGlass} className="icon_brand_size" /></button>
                    </form>
                </div>
            </li>
            <li className="Navbarli help nabb"><div className="helip"><span>Help </span><FontAwesomeIcon icon={faAngleDown} className="icon_brand_size spa" /></div></li>
            <li className="Navbarli"><div className="nabb">Login/SignUp</div></li>
            <li className="Navbarli mare"><div><FontAwesomeIcon icon={faCartShopping} className="icon_brand_size" /><span>0</span><span>$0.00</span></div></li>
        </ul>
        

    
            
        </div>
        <div className="NavBack">
        <div className="Navbar1">
        <ul className="Navbarlist slepp">
              
                <li><div className="nabb" >Eye-Glasses</div></li>
                <li><div className="nabb">Oil-perfumes </div></li>
                <li><div className="nabb">Night-wears</div></li>
                <li><div className="nabb">Umbrellas</div></li>
                <li><div className="nabb">Foot wears</div></li>
               
              
            </ul>
        </div>
        </div>
        </div>
        <div className='NavBkin'>
  <div className='kinG'>
   <div>Nivie</div>
   <div><FontAwesomeIcon icon={faCartShopping} className="icon_brand_size" /></div>
  </div>
  <div className='meme2'>
      
      <form className="NavbarSearch">
                        <input type="search" placeholder = "search for products" className="search"/>
                        <button className="BtnSearch"><FontAwesomeIcon icon={faMagnifyingGlass} className="icon_brand_size" /></button>
                    </form>
  </div>
        </div>
    </div>
  )
}

export default navbar