import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: ""
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form)
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
            } else {
            this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        let name, address, street, city, state, zip, phone, email, contactmessage;
        if (this.props.data) {
            ( { name, address, phone, email, contactmessage } = this.props.data);
            ( { street, city, state, zip } = address )
        }
        const { status } = this.state;

        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">{contactmessage}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="eight columns">
                        <form
                            onSubmit={this.submitForm} 
                            action="https://formspree.io/maypbyek"
                            method="POST" 
                            id="contactForm" 
                            name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name<span className="required">*</span></label>
                                    <input 
                                        type="text"
                                        placeholder="Jane Doe"
                                        defaultValue="" 
                                        size="25" 
                                        id="contactName" 
                                        name="contactName" 
                                        onChange={this.handleNameChange}
                                    />
                                </div>      

                                <div>
                                    <label htmlFor="contactEmail">Email<span className="required">*</span></label>
                                    <input 
                                        type="text"
                                        placeholder="jane.doe@example.com" 
                                        defaultValue="" 
                                        size="25" 
                                        id="contactEmail" 
                                        name="contactEmail" 
                                        onChange={this.handleEmailChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input 
                                        type="text"
                                        placeholder="Greetings" 
                                        defaultValue="" 
                                        size="25" 
                                        id="contactSubject" 
                                        name="contactSubject" 
                                        onChange={this.handleSubjectChange}/>
                                </div>

                                <div>
                                    <label htmlFor="contactMessage">
                                        Message
                                        <span className="required">*</span>
                                    </label>
                                    <textarea 
                                        placeholder="Hello, World!"
                                        cols="20" 
                                        rows="5" 
                                        id="contactMessage" 
                                        name="contactMessage">
                                    </textarea>
                                </div>

                                {/* <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div> */}
                                {status === "SUCCESS" ? <p>Email has been sent! Thanks!</p> : <button>Submit</button>}
                                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                            </fieldset>
                        </form>
{/* 
                        <div id="message-warning">Error</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                        </div> */}
                    </div>

                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Contact Details</h4>
                            <p className="address">
                                <span>{name}</span> <br />
                                <span>{street}</span> <br />
                                {city}, {state} {zip} <br />
                                <span>{email}</span> <br />
                                <span>{phone}</span>
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}

export default Contact;
