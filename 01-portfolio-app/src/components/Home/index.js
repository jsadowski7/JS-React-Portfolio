import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello, <br /> I'm Jake Sadowski
                <br />
                Web Developer
                </h1>
                <h2>Full-Stack Web Development / JavaScript, React, MySQL, jQuery, and more!</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;