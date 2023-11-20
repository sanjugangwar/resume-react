import React from 'react'
import Intro from './resume/Intro'
import Education from './resume/Education'
import Skills from './resume/Skills'
import Experience from './resume/Experience'
import Projects from './resume/Projects'
import TechSkills from './resume/TechSkills'
import ExtraCurricular from './resume/ExtraCurricular'

const Resume = () => {
    return (

        <>


            <div className="container-fluid">
                <Intro></Intro>
                <Education></Education>
                <Skills></Skills>
                <Experience></Experience>
                <Projects></Projects>
                <TechSkills></TechSkills>
                <ExtraCurricular></ExtraCurricular>
            </div>

        </>

    )
}

export default Resume