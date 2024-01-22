import React from 'react'

function Projects() {
    return (
        <section id="projects">
            <h4 className='display-4 text-center'>Projects</h4>
            <div className="container project-container">
                <div className="row">
                    <div
                        id="carouselExampleAutoplaying"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <a href="https://resilient-manatee-cbdf5e.netlify.app/">
                                    <img src="https://i.postimg.cc/jSgkfjDd/Screenshot-2023-10-29-201838.png" className="img-fluid" alt="" />

                                </a>
                                <h3 style={{ textAlign: 'center' }}>Smart Watch Landing Page</h3>

                            </div>
                            <div className="carousel-item">
                                <a href="https://precious-starlight-18c761.netlify.app/">
                                    <img src="https://i.postimg.cc/KYxctQx8/Screenshot-2023-11-09-204545.png" className="project project img-fluid" alt="" />
                                </a>
                                <h3 style={{ textAlign: 'center' }}>CryptoZone : Cyrptocurrency Price Tracker</h3>
                            </div>
                            <div className="carousel-item">
                                <a href="https://jovial-kulfi-4a889a.netlify.app/">
                                    <img src="https://i.postimg.cc/1tm2nhKW/Screenshot-2023-10-31-204623.png" className="img-fluid" alt="" />

                                </a>
                                <h3 style={{ textAlign: 'center' }}>Qr Code Generator</h3>
                            </div>
                            <div className="carousel-item">
                                <a href="https://mellow-phoenix-6932ba.netlify.app/">
                                    <img src="https://i.postimg.cc/Kc3Kyz85/countryapi.png" className="project img-fluid" alt="" />
                                </a>
                                <h3 style={{ textAlign: 'center' }}>Explore The World !</h3>
                            </div>
                            <div className="carousel-item">
                                <a href="https://cvip-todolist.vercel.app/">
                                    <img src="https://i.postimg.cc/bY2DT17W/todo.png" className="img-fluid" alt="" />

                                </a>
                                <h3 style={{ textAlign: 'center' }}>Task Manager Using React.Js and Material UI</h3>
                            </div>
                            <div className="carousel-item">
                                <a href="https://flourishing-bublanina-f566ea.netlify.app/">
                                    <img src="https://i.postimg.cc/wvXvFtJB/Screenshot-2023-11-26-134857.png" className="img-fluid" alt="" />

                                </a>
                                <h3 style={{ textAlign: 'center' }}>Job Aspire: MERN Stack Job Portal</h3>
                            </div>
                            <div className="carousel-item">
                                <a href="https://regal-dango-eb43f3.netlify.app/">
                                    <img src="https://i.postimg.cc/YSw-q6zF7/Screenshot-2023-10-11-191337.png" className="img-fluid" alt="" />

                                </a>
                                <h3 style={{ textAlign: 'center' }}>Blog App Using MERN Stack</h3>
                            </div>
                            <div className="carousel-item">
                                <a href="https://temp-convert-online.netlify.app/">
                                    <img src="https://i.postimg.cc/1zjP57pg/Screenshot-2023-11-09-220303.png" className="project img-fluid" alt="" />
                                </a>
                                <h3 style={{ textAlign: 'center' }}>Temperature Converter Web App</h3>
                            </div>
                            <div className="carousel-item">
                                <a href="https://online-html-css-js-editor.netlify.app/">
                                    <img src="https://i.postimg.cc/mrXzdj2f/editor.png" className="project img-fluid" alt="" />
                                </a>
                                <h3 style={{ textAlign: 'center' }}>Online Code Editor</h3>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects