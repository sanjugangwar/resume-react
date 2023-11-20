import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-10 borderBottom">
                    <h4>PROJECTS</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-1">
                    <h5>  <span className="borderBottom"> LearningZone </span> </h5>
                </div>
                <div className="col-3" style={{ marginTop: "-18px;" }}>
                    <p>|HTML, CSS, JavaScript, Django, SQLite</p>
                </div>
                <div className="col-6   text-end" style={{ marginTop: "-18px;" }}>
                    <h5>02/2023-05/2023</h5>
                </div>
            </div>
            <div className="row" style={{ marginTop: "-18px;" }}>
                <div className="col-1"></div>
                <div className="col-10">
                    <ul>
                        <li>LearningZone is a group project, it is a web application which gives a single dashboard to do activity related
                            to study.</li>
                        <li>Student can make todo list, add hoemwork, search on wikipedia , youtube and google books</li>
                        <li>We have used HTML,CSS, Javascript, Django,SQLite.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-1">
                    <h5> <span className="borderBottom"> Tic-Tac-Toe </span></h5>
                </div>
                <div className="col-3" style={{ marginTop: "-18px;" }}>
                    <p>| Human vs Computer</p>
                </div>
                <div className="col-6   text-end" style={{ marginTop: "-18px;" }}>
                    <h5>11/2021-12/2021</h5>
                </div>
            </div>
            <div className="row" style={{ marginTop: "-18px;" }}>
                <div className="col-1"></div>
                <div className="col-10">
                    <ul>
                        <li>It uses Min-Max algorithm.</li>
                        <li>Implemented using C++.</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-1 ">
                    <h5><span className="borderBottom">Grpc Guide</span></h5>
                </div>
                <div className="col-3" style={{ marginTop: "-18px;" }}>
                    <p>| Report</p>
                </div>
                <div className="col-6 text-end" style={{ marginTop: "-18px;" }}>
                    <h5>02/2022-04/2022</h5>
                </div>
                <div className="row" style={{ marginTop: "-18px;" }}>
                    <div className="col-1"></div>
                    <div className="col-10">
                        <ul>
                            <li>introduction and installation of google remote procedure call(Grpc)</li>
                            <li>We made a small project using this technology.</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            )
}

            export default Projects