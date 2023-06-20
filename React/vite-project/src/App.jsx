import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import picture from "./assets/arrow1.png"
import picture1 from "./assets/fb.png"


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
     <div class="container">
        <nav>
            <div class="nav1">
                <img src={picture1} class="logo" ></img>
                <label class="in">INBIO</label>
            </div>
            <div class="navbar">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">FEATURES</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">RESUME</a></li>
                    <li><a href="#">CLIENTS</a></li>
                    <li><a href="#">PRICING</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="content">
        <h4>WELCOME TO MY WORLD</h4>
        <h1>Hi, I'm <span class="span">Jone Lee</span></h1>
        <h2>a Developer.</h2>
        <p>I use animation as a third dimension by which to simplify experiences and building through each and
            every interaction. I'm not adding motion just to space things up, but doing it in ways that.
        </p>
        <div class="photo">
            <img src={picture} class="img"></img>
        </div>
    </div>
    
    

    
  </>
  )
}

export default App
