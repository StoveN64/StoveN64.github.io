import React from 'react';



const sites = [
  
]

const Example = ({title, subTitleOne, subTitleTwo, image, url, code}) => (
  <div className="Example">
    <div className="text">
    <h1 href="https://github.com/StoveN64" target="_blank" rel="noopener noreferrer" className="title">{title}</h1>
      <div className="info-container">
        <p className="info">{subTitleOne}</p>
        <p className="info">{subTitleTwo}</p>
      </div>
    </div>
    <div className="img-container">
      <img src={image} alt="" className="snapshot" />
      <div className="overlay">
        <a href={url} target="_blank" rel="noopener noreferrer" className="link" >Visit the site</a>
        <p>|</p>
        <a href={code} target="_blank" rel="noopener noreferrer" className="link" >See the code</a>
      </div>
    </div>
      
  </div>
);

const Work = () => (
  <div className="Work">
    {/* <h1 className="work-title">Selected Works</h1> */}
    {sites.length
      ? sites.map(e => <Example {...e} />)
      : null
    }
  </div>
);

export default Work