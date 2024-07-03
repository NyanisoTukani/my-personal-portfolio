import React, { Component } from 'react'
export class Navbar extends Component {
    state = {
        clicked:false
    }

    handleClick = () =>{
        this.setState({ 
            clicked :!this.state.clicked
        })
    }
  render() {
    
    return (
      <>
      <nav>
      
        <a href='#'>
        <img src="./img/nyanisoAbout.png" alt="About Me" width="80" height="80"></img>
        </a>

        <div>
        <ul id = "navbar" className={this.state.clicked ? '#navbar active' : '#navbar'}>
        <li><a href='#' id = "active" >Home</a></li>
        <li><a href='#'>About Me</a></li>
        <li><a href='#'>Projects</a></li>
        </ul>
        </div>
        <div id = 'mobile' onClick={this.handleClick}>
        <i id = 'bar' className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
      
      </>
    )
  }
}

export default Navbar