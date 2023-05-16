import React from 'react'
import './index.scss'
import ResumeImg1 from '../../assets/images/ResumeSC1.png'
import ResumeImg2 from '../../assets/images/ResumeSC2.png'
const Resume = () => {
  return (
    <div className="container resume-page">
      <h1 className="title">Resume</h1>
      <div className="resume-img">
        <img src={ResumeImg1} alt="Resume"></img>
        <img src={ResumeImg2} alt="Resume2"></img>
      </div>
    </div>
  )
}

export default Resume
