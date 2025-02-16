import React from 'react'
import Isotipo from '../../assets/isotipo.png';
import Logo from '../../assets/logo.png';
import "../Nav/Nav.css";

const Nav = () => {
  return (
    <div className='container-menu'>
      <div className="isotipo">
            <div className='image-container'>
                <img src= {Isotipo} alt='isotipo'/>
            </div>
          <div className='image-container'>
              <img src= {Logo} alt='logo'/>
          </div>
      </div>

      <div className="nav">
        <nav className="menu">
            <ul>
                <li><a href="#header">Inicio</a></li>
                <li><a href="#projectos">Proyectos</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#sobremi">Sobre mi</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
      </div>
      <div className="button">
        <button>
          Descargar hv
        </button>
      </div>

    </div>
  )
}

export default Nav