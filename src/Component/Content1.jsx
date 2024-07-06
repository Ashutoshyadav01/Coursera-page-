import React from 'react'
import "../index.css"

const Content1 = () => {
  const inlineStyle={
   marginTop:'20px'
  }
  const inlineStyle2={
    height:'280px'
   }
  return (
    <div className='content1-main' style={inlineStyle2}>
      <h1 className='wul'>What you'll learn</h1>
      <div className='content1'>
        <div><li>Gain an immersive understanding of the practices and skills <br />needed to succeed in an entry-level project management role</li>
        <li style={inlineStyle}>Learn the foundations of Agile project management, with a <br />focus on implementing Scrum events, building Scrum <br />artifacts, and understanding Scrum roles</li></div>
        <div><li>Learn how to create effective project documentation and <br /> artifacts throughout the various phases of a project</li>
        <li style={inlineStyle}>Practice strategic communication, problem-solving, and <br /> stakeholder management through real-world scenarios</li></div>
      </div>
    </div>
  )
}

export default Content1
