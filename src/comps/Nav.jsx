import React from 'react';

import resume from '../assets/resume.pdf'

const Nav = () => (
  <div className='Nav'>
    <a href="https://www.linkedin.com/in/steven-nersesian-9a1592211/" target="_blank" rel="noopener noreferrer" className='link'>LINKEDIN</a>
    <a href="https://twitter.com/4SteveThePirate" target="_blank" rel="noopener noreferrer" className='link'>TWITTER</a>
    <a href="https://github.com/StoveN64" target="_blank" rel="noopener noreferrer" className='link'>GITHUB</a>
    <a href="mailto:stevenersesian95@gmail.com" title="If that doesn't work, my email is stevenersesian95@gmail.com" className='link'>EMAIL</a>
    <a href={resume} target="_blank" rel="noopener noreferrer" className='link'>RESUME</a>
  </div>
);

export default Nav