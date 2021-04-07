import React from 'react';
import Logoimg from '../../assets/images/logo.svg'
import Landingimg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHearIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'

function Landing(){
  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logoimg} alt="logo" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={Landingimg} alt="landing" className="hero-image"/> 

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="study icon"/>
            Estudar
          </a>

          <a href="" className="give-classes"> {/* Dar aulas botão */}
            <img src={giveClassesIcon} alt="give classes icon"/>
            Ensinar
          </a>
        </div>

          <span className="total-connections">
            Total de 200 conexões já realizadas
            <img src={purpleHearIcon} alt="Coração roxo"/>
          </span>
      </div>
    </div>
  )
}

export default Landing;