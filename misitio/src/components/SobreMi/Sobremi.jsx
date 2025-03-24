import React from 'react'
import '../SobreMi/Sobremi.css'
import ImageComponent from '../ImageComponent';
import steven from '../../assets/steven.webp'
import deportes from "../../assets/deportes.png"
import diseñador from "../../assets/diseñador.png"
import aprendizajec from "../../assets/aprendizajec.png"
import trabajar from "../../assets/trabajar.png"

const sobremi = [
  {
    id : 1,
    title: "Diseñador no diseador",
    description: "Inicie como diseñador grafico y ahora amo el desarrollo",
    imageUrl: deportes,
  },
  {
    id : 1,
    title: "Deportes y aire libre",
    description: "Amante del futbol, el gimnasio y estar al aire libre",
    imageUrl: diseñador,
  },
  {
    id : 1,
    title: "Aprendizaje continuo",
    description: "Aprendo rápido, sin importar si es autoaprendizaje",
    imageUrl: aprendizajec,
  },
  {
    id : 1,
    title: "Trabajar en equipo",
    description: "Inicie como diseñador grafico y ahora amo el desarrollo",
    imageUrl: trabajar,
  }
];

const SobreMi = () => {
  return (
    <div className='sobremi' id='sobremi'>
        <div className='sobremi__container'>
          <div className='sobremi__container-title'>
            <h2>CONOCE 
              <span> UN <br /> POCO </span> <br />
              SOBRE MI
            </h2>
            <div className='sobremi__container-info-image'>
              <ImageComponent src={steven} alt="Steven"/>
            </div>
          </div>
          <div className='sobremi__container-items'>
            {sobremi.map(({id, title, description, imageUrl}) => (
              <div key={id} className='sobremi__container-info'> 
                  <div className='sobremi__container-info-icon'>
                      <img src={imageUrl} alt={title} />
                  </div>
                <div className="sobremi__container-info-description">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default SobreMi