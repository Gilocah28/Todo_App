import React, { useContext } from 'react'
import bgLight from '../../assets/bg-desktop-light.jpg'
import bgDark from '../../assets/bg-desktop-dark.jpg'
import bgLightMobile from '../../assets/bg-mobile-light.jpg'
import bgDarkMobile from '../../assets/bg-mobile-dark.jpg'
import DataContext from '../context/DataContext'
import '../background-Container/background.scss'

const BackgroundComponent = () => {

  const { theme } = useContext(DataContext)
  
  return (
    <div className='image-source'>
      <picture>
        <source media='(max-width:600px)' srcSet={theme ? bgLightMobile : bgDarkMobile} />
        <img className='img-source' src={theme ? bgLight : bgDark} alt="Background-image" />
      </picture>
    </div>
  )
}

export default BackgroundComponent
