import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="home-content">
                                <h5 className='display-5'>Hi There <img src='https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png' className='wave' />, I'm Manas</h5>
                                <h1 className='display-1'>I'm A Full Stack Web Developer</h1>
                                <p>I'm a passionate Full Stack Web Developer with internship experience and a diverse project portfolio. My expertise spans HTML, CSS, JavaScript, Bootstrap, React.js, Next.js, Tailwind, and backend technologies like Express, Node.js, and MongoDB.</p>
                                <div className="home-btn">
                                    <Link to="/projects">
                                        <button className="work-btn">My Work</button>
                                    </Link>
                                    <Link to="/Contact">
                                        <button className="contact-btn">Contact Me <i class="fa-solid fa-arrow-right fa-beat-fade"></i></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='banner-img'>
                            <img src="https://i.postimg.cc/FKgcsq5x/image-be5326e1d9b93f285348.png"
                                className="home-image"
                                alt=""
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home