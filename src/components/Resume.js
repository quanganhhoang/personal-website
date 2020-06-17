import React, { Component } from 'react';

class Resume extends Component {
    render() {
        let education, work, skills;
        let educationDiv, workDiv;
        let coursesDiv;
        let languagesDiv, techonologiesDiv;
        if (this.props.data) {
            ( { education, work, skills } = this.props.data);
            
            educationDiv = education.map(education => {
                coursesDiv = education.courses.join(', ')

                return (
                    <div key={education.school}>
                        <h3>{education.school}</h3>
                        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                        <p className="courses">
                            Relevant courses: {coursesDiv}
                        </p>
                    </div>
                )
            })

            workDiv = work.map(work => {
                const workDescriptionDiv = work.description.map(elem => {
                    return (
                        <li key={elem}>{elem}</li>
                    )
                })
                return (
                    <div key={work.company}>
                        <h3>{work.company}</h3>
                        <p className="info">
                            {work.title}
                            <span>&bull;</span> <em className="date">{work.years}</em>
                        </p>
                        <ul className="work-experience">
                            {workDescriptionDiv}
                        </ul>
                        
                    </div>
                )
            })
            
            const { languages, technologies } = skills;
            languagesDiv = languages.map(elem => {
                return (
                    <li key={elem}>{elem}</li>
                )
            })

            techonologiesDiv = technologies.map(elem => {
                return (
                    <li key={elem}>{elem}</li>
                )
            })
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {educationDiv}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {workDiv}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Technologies</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div>
                            <h3>Languages</h3>
                            <ul className="work-experience">
                                {languagesDiv}
                            </ul>
                            <h3>Technologies &amp; Frameworks</h3>
                            <ul className="work-experience">
                                {techonologiesDiv}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
