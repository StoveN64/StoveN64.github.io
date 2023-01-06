import React from 'react';

import resume from '../assets/resume.pdf'

const Footer = () => (
 <div className="Footer" >
    <a href="https://www.linkedin.com/in/steven-nersesian-9a1592211/" target="_blank" rel="noopener noreferrer" className='link'><i class="fab fa-linkedin"></i></a>
    <a href="4SteveThePirate" target="_blank" rel="noopener noreferrer" className='link'><i class="fab fa-twitter-square"></i></a>
    <a href="https://github.com/StoveN64" target="_blank" rel="noopener noreferrer" className='link'><i class="fab fa-github-square"></i></a>
    <a href="mailto:stevenersesian95@gmail.com" title="If that doesn't work, my email is stevenersesian95@gmail.com" className='link'><i class="fas fa-envelope-square"></i></a>
    <a href={resume} target="_blank" rel="noopener noreferrer" className='link'><i class="far fa-file"></i></a>
 </div>
);

export default Footer