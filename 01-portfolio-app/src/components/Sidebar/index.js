import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoJ from '../../assets/images/logo-j.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEnvelope, faHome, faPaperclip, faUser } from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/JS-React-Portfolio'>
            <img src={LogoJ} alt='logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/JS-React-Portfolio">
                <FontAwesomeIcon icon={faHome} color="#aaa694" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#aaa694" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#aaa694" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/portfolio">
                <FontAwesomeIcon icon={faBook} color="#aaa694" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faPaperclip} color="#aaa694" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jake-sadowski-6b9385255/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#aaa694" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/jsadowski7'>
                    <FontAwesomeIcon icon={faGithub} color="#aaa694" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar