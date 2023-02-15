import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import ProfilePic from '../../../src/assets/images/IMG_3900.jpg'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [
      ' ',
      'J',
      'a',
      'k',
      'e',
      ' ',
      'S',
      'a',
      'd',
      'o',
      'w',
      's',
      'k',
      'i',
    ]
    const jobArray = [
      'W',
      'e',
      'b',
      ' ',
      'D',
      'e',
      'v',
      'e',
      'l',
      'o',
      'p',
      'e',
      'r',
    ]

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000) 
    // }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Full-Stack Web Development / JavaScript, React, MySQL, jQuery, and more!</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <div className='profile-pic'>
              <img src={ProfilePic} alt='ProfilePic'></img>
            </div>
        </div>
    )
}

export default Home;