import React from 'react';
import './index.scss';
import portfolioData from '../../data/portfolio.json';
import RenderPortfolio from '../RenderPortfolio';

const Portfolio = () => {
    console.log(portfolioData.portfolio);
    return (
        <div className='container portfolio-page'>
            <h1 className='page-title'>Portfolio</h1>
            <RenderPortfolio portfolioData={portfolioData.portfolio}/>
        </div>
    )
}

export default Portfolio;