import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ 
            clicked: !this.state.clicked
        });
    }

    render() {
        return (
            <>
                <nav>
                    <Link to="/">
                        <img src="./img/nyanisoAbout.png" alt="About Me" width="80" height="80" />
                    </Link>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? '#navbar active' : '#navbar'}>
                            <li><Link to="/" id="active">Home</Link></li>
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/portfolio">Projects</Link></li>
                        </ul>
                    </div>
                    <div id='mobile' onClick={this.handleClick}>
                        <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
