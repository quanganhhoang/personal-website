import React, { Component } from 'react';
// import ReactGA from 'react-ga';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            resumeData: {}
        };

        // ReactGA.initialize('UA-110570651-1');
        // ReactGA.pageview(window.location.pathname);
    }

    getResumeData = () => {
        axios.get('resumeData.json')
        .then(res => {
            this.setState({
                resumeData: res.data
            })
        })
        .catch(err => {
            console.log(err)
            alert(err)
        })
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        const { main, resume, portfolio } = this.state.resumeData;
        return (
            <div className="App">
                <Header data={ main }/>
                <About data={ main }/>
                <Resume data={ resume }/>
                <Portfolio data={ portfolio }/>
                <Contact data={ main }/>
                <Footer data={ main }/>
            </div>
        );
    }
}

export default App;
