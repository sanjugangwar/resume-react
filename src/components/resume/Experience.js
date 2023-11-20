import React from 'react'

const Experience = () => {
    return (
        <div>

            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-10 borderBottom">
                    <h4>EXPERIENCE</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 ">
                    <h5><span className="borderBottom"> CHQBOOK(SDE-Intern) </span></h5>
                </div>
                <div className="col-5   text-end">
                    <h5>02/2023-05/2023</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <ul>
                        <li>Developed business KYC and lead service APIs using Node.js, JavaScript, MySQL</li>
                        <li>Resolved bugs and optimized code for smooth application performance</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Experience