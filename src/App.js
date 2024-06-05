import logo from './logo.svg';
import './css/App.css';
import Banner from './components/banner';
import Tag from './components/tag';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="main-outer">
      <div className="main">
        <header className="main-header">
          Katie Day
        </header>
        <div className='desc'>
          A Computer Science student at the University of Birmingham. Additionally, I am a technology degree apprentice at PwC. 
        </div>
        <hr className='main-header-divider'></hr>
        <h2 >Projects</h2>
          <ul>
          <li className='list-items'>
              <a href="https://github.com/kd-000/secret-languages">Secret Language Translator</a> <Tag type={'haskell'}></Tag> A collection of Haskell Scripts to convert strings to secret languages.
            </li>
            <li className='list-items'>
              <a href="https://kd-000.github.io/minimax">Minimax & Alpha Beta Pruning Visualiser</a> <Tag type={'react'}></Tag> A method of viewing a game theory algorithm and the optimisation of it.
            </li>
            <li className='list-items'>
              <a href="https://github.com/kd-000/A-Level-Project">Blitz</a> <Tag type={'vb'}></Tag> Touch Typing Program completed for my NEA in 2022.
            </li>
          </ul>
        <h2 className="h2-header">Writing</h2>
        <ul>
            <li className='list-items'>
              <Link to="/blitz">Blitz - Software Documentation</Link>
            </li>
            <li className='list-items'>
              <Link to="/quantum1">Quantum Computing - Literature Review</Link> <Tag type={'qc'}></Tag>
            </li>
            <li className='list-items'>
              <Link to="/quantum2">Will Quantum Computing escape the Theoretical?</Link> <Tag type={'qc'}></Tag>
            </li>
          </ul>
          <hr className='main-header-divider-bottom'></hr>
          <div className="icons-bottom">
            <a className="icon-bottom-item" href="https://www.linkedin.com/in/katherine-day-091b41206"><img className="icon" src="linkedin-black.png"></img></a>
            <a className="icon-bottom-item" href="https://www.linkedin.com/in/katherine-day-091b41206"><img className="icon" src="github-mark.svg"></img></a>
          </div>
          {/* <div style={{textAlign:"center"}}><a href="/about">About Me</a></div> */}
      </div>
      
      {/* <Banner></Banner> */}
    </div>
  );
}

export default App;
