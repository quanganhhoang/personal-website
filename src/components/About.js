import React, { Component } from 'react';

class About extends Component {
    render() {
        let name, image, bio, funfact, address, street, city, state, zip, phone, email, resumedownload;
        let profilePic;
        if (this.props.data) {
            ( { name, image, bio, funfact, address, phone, email, resumedownload } = this.props.data);
            ( { street, city, state, zip } = address)
            profilePic = `images/${image}`;
        }

        return (
            <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilePic} alt="QA's Profile Pic" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <h2>Fun Fact</h2>
                    <p>{funfact}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{street}<br />
                                        {city} {state}, {zip}
                                </span>
                                <br />
                                <span>{phone}</span>
                                <br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a 
                                    href={resumedownload}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="button">
                                        <i className="fa fa-download"></i>
                                        Download Resume
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default About;
