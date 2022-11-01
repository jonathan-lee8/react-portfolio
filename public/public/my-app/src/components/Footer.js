import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstaGramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
       <LinkedInIcon onClick = {() => window.open('https://www.linkedin.com/in/jonathanhlee8/', '_blank')} />
       <GitHubIcon onClick = {() => window.open('https://github.com/jonathan-lee8', '_blank')} />  
       <InstaGramIcon onClick = {() => window.open('https://www.instagram.com/jonathanleeee/', '_blank')} />  
       <EmailIcon onClick = {() => window.open('mailto:jonathanhlee8@gmail.com', '_blank')} />  
      </div>
      <p>&copy; 2022 Jonathan Lee...Coming Soon</p>
    </div>
  )
}

export default Footer;