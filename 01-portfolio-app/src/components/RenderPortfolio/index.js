import React from "react";
import './index.scss';
const renderPortfolio = ({portfolioData}) => {
    return (
      <div className="images-container">
        
        {portfolioData.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>  
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"/>
                <div className="content">
                    <p className="title">{port.title}</p>
                    <h4 className="description">{port.description}</h4>
                    <button className="btn" onClick={() => window.open(port.url)}
                    >View</button>
                </div>
            </div>
          )
        })}
      </div>
    )
  }

  export default renderPortfolio;