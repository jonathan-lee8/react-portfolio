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
       <LinkedInIcon />
       <GitHubIcon />  
       <InstaGramIcon />  
       <EmailIcon />  
      </div>
      <p>&copy; 2022 Jonathan Lee...Coming Soon</p>
    </div>
  )
}

export default Footer;