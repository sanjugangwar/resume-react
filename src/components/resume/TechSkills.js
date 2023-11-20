import React from 'react'

const TechSkills = () => {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-10 borderBottom">
                    <h4>TECHNICAL SKILLS</h4>
                </div>
            </div>
            <div className="row" >
                <div className="col-1"></div>
                <div className="col-1">
                    <h5>Languages:</h5>
                </div>
                <div className="col-10" style={{ marginTop: "-18px;" }}>
                    C, C++,Python, Django, JavaScript,Java,SQL
                </div>
            </div>
            <div className="row" >
                <div className="col-1"></div>
                <div className="col-2">
                    <h5>Developer Tools:</h5>
                </div>
                <div className="col-9" style={{ marginTop: "-18px;" }}>
                    VS Code,intellij
                </div>
            </div>
            <div className="row" >
                <div className="col-1"></div>
                <div className="col-2">
                    <h5>Technologies/Frameworks:</h5>
                </div>
                <div className="col-9" style={{ marginLeft: "-40px;" }}>
                    GitHub, Git,Django
                </div>
            </div>
        </div>
    )
}

export default TechSkills