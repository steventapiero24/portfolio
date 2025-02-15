import React from 'react'
import Css from '../SobreMi/Sobremi.css'
import ImageComponent from '../ImageComponent';
import steven from '../../assets/steven.png'

const SobreMi = () => {
  return (
    <div className='sobremi' id='sobremi'>
        <div className='sobremi__container'>
          <div className='sobremi__container-title'>
            <h2>Sobre mi</h2>
          </div>
          <div className='sobremi__container-info'> 
            <div className="sobremi__container-info-description">
              <p>
              Soy diseñador con más de <b>
                6 años de experiencia</b>, apasionado por lo que hago, amante de las experiencias audiovisuales, el <b>diseño y la programación.</b> Siempre estoy en constante aprendizaje y exigiéndome al máximo, aprendo rápido y combino ese talento con la disciplina para ir mejorando cada día y <b>dar todo en cada proyecto.</b>  
              </p>
            </div>
            <div className='sobremi__container-info-image'>
              <ImageComponent src={steven} alt="Steven"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SobreMi