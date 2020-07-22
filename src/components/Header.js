import React, { Component } from 'react';

class Header extends Component {
    render() {
        let name, occupation, social, resumedownload;
        let networks;
        if (this.props.data) {
            ( {name, occupation, social, resumedownload} = this.props.data)
            
            networks = social.map(network => {
                return (
                    <li key={network.name}>
                        <a href={network.url}><i className={network.className}></i></a>
                    </li>
                )
            });
        }
        
        return (
            <header id="home">

            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">{name}</h1>
                    <h2 className="responsive-headline">{occupation}</h2>
                    <hr />
                    <ul className="social">
                        {networks}
                    </ul>
                </div>
                <div className="banner-text columns download">
                    <p style={{marginTop: 20}}>
                        <a 
                            href={resumedownload}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="button"
                            style={{backgroundColor: '#F0923A'}}
                        >
                                <i className="fa fa-download" style={{marginRight: 5}}></i>
                                Hire Me
                        </a>
                    </p>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

            </header>
        );
    }
}

export default Header;
