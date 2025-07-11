import React from 'react'
import Isotipo from '../../assets/isotipo.webp';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import "../Nav/Nav.css";

const Nav = () => {
  return (
    <div className='container-menu'>
      <div className="isotipo">
            <div className='image-container'>
                <img src= {Isotipo} alt='isotipo'/>
            </div>
      </div>

      <div className="nav">
        <nav className="menu">
            <ul>
            </ul>
        </nav>
      </div>
      <div className="menu">
        <a href='./Hoja de vidaStevenT.pdf' download={''} className='button__hv'>
          <ArrowRightAltOutlinedIcon/> 
          <span>
            Descargar hv
          </span>
        </a>
      </div>

    </div>
  )
}

export default Nav