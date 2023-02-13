import './index.scss'
// FA ICONS NOT LOADING GET HELP 56:49
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAngular,
    faHtml5,
    faCss3,
    faReact,
    faJsSquare,
    faGitAlt
} from '@fortawesome/free-solid-svg-icons';

const About = () => {

    return (
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            I am a full-stack web developer located in Austin, TX. I am
            currently looking for a role in web development and looking to learn
            and challenge myself. I enjoy the creative freedom of designing
            applications, and I love solving back-end code problems just as
            much! My other passions include playing guitar, traveling, gaming,
            and more!
          </p>
          <p>I consider myself hardworking and a fast learner and I love exploring
            the freedom in creating my own applications. I have experience working in a
            team setting and I am working to be fluent in both front and back end development.
          </p>
          <p>Technologies: JavaScript, HTML, CSS, React.js, Node.js, MySQL, NoSQL, Sequelize,
            jQuery, Bootstrap, Mongoose, and MongoDB
          </p>
        </div>
        
        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
    )
}

export default About;