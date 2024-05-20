import React from 'react'
import '../css/App.css'
import Banner from '../components/banner';

function About() {
    return (
        <div className="main-outer">
        <div className="main">
          <header className="main-header">
            Katie Day
          </header>
          <div className='desc'>
            A Computer Science student at the University of Birmingham. Additionally, I am a technology degree apprentice at PwC. Here is what I'm doing <a href="./now">now</a>. 
          </div>
          <hr className='main-header-divider'></hr>
          <h2 >Contact</h2>


            <hr className='main-header-divider'></hr>
            <div style={{textAlign:"center"}}><a href="/about">About Me</a></div>
        </div>
        
        <Banner></Banner>
      </div>
    );
} export default About;