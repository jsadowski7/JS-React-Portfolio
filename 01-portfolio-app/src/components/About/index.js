import './index.scss'
// FA ICONS NOT LOADING GET HELP 56:49
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCoffee,
} from '@fortawesome/fontawesome-free-solid';

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
        {/* CODE FOR SPINNING CUBE WITH TECHNOLOGIES ON EACH SIDE */}
        {/* FA ICONS NOT WORKING / FUTURE DEVELOPMENT */}
        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faCoffee} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCoffee} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCoffee} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCoffee} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCoffee} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCoffee} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
    )
}

export default About;