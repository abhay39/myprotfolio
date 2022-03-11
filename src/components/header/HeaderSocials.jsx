import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/abhay-gupta-0270ab206/' target='_blank' ><BsLinkedin/></a>
        <a href='https://github.com/abhay39' target='_blank' ><BsGithub/></a>
        <a href='https://www.facebook.com/abhay.kumar.gupta99/' target='_blank' ><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials