import React from 'react'

const Intro = () => {
    return (
        <div>

            <div className="row">
                <div className="text-center nameSize"> <span style={{ fontSize: "40px;" }}>S</span>ANJAY <span
                    style={{ fontSize: "40px;" }}>G</span>ANGWAR</div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <ul className="contact-link">
                        <li><i className="fa fa-phone" aria-hidden="true">&nbsp;<span className="borderBottom">+91-9318441731</span></i></li>
                        <li><i className="fa fa-google " aria-hidden="true">&nbsp; <span className="borderBottom">sanjugangwar667@gmail.com</span></i></li>
                        <li><i className="fa fa-linkedin " aria-hidden="true"></i> &nbsp; <span className="borderBottom">sanjaygangwar</span></li>
                        <li><i className="fa fa-github" aria-hidden="true"></i>&nbsp; <span className="borderBottom">sanjaygangwar</span></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Intro