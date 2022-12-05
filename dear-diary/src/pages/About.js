import React from 'react';
import '../components/about/About.css';

function About() {

    let message = `Dear Diary is a highly technologically enhanced 
    \n Journalling application that feels what you're feeling and helps you maintain a positive mental state.
    \n The application was developed using technologies including `;

    return (
        <section className='section-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h1 className='section-title text-3xl'>
                            The Team Behind Dear Diary
                        </h1>
                        <p className='mt-10'>{message}</p>
                    </div>


                    <div className='col-sm-4 col-md-3'>
                        <div className='team-item'>
                            <img src='https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg' className='team-img' alt='pic' />
                            <h3>Gaurav B.</h3>
                            <div className='team-info'>
                                <p>NUID: 002XXXXXX</p>
                                <p>Gaurav is the best.</p>
                                {/* <p>Gaurav was responisble for the design and development of signup, signin and about page.</p> */}
                                <ul className='team-icon'>
                                    <li><a href='#' className='linkedin'><i className='fa fa-linkedin'></i></a></li>
                                    <li><a href='#' className='github'><i className='fa fa-github'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 col-md-3'>
                        <div className='team-item'>
                            <img src='https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg' className='team-img' alt='pic' />
                            <h3>Dhruv Patel</h3>
                            <div className='team-info'>
                                <p>NUID: 002XXXXXX</p>
                                <p>Dhruv is the best.</p>

                                <ul className='team-icon'>
                                    <li><a href='#' className='linkedin'><i className='fa fa-linkedin'></i></a></li>
                                    <li><a href='#' className='github'><i className='fa fa-github'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 col-md-3'>
                        <div className='team-item'>
                            <img src='https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg' className='team-img' alt='pic' />
                            <h3>Anushka Mandloi</h3>
                            <div className='team-info'>
                                <p>NUID: 002XXXXXX</p>
                                <p>Anushka is the best.</p>

                                <ul className='team-icon'>
                                    <li><a href='#' className='linkedin'><i className='fa fa-linkedin'></i></a></li>
                                    <li><a href='#' className='github'><i className='fa fa-github'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-4 col-md-3'>
                        <div className='team-item'>
                            <img src='https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg' className='team-img' alt='pic' />
                            <h3>Jingyin Huang</h3>
                            <div className='team-info'>
                                <p>NUID: 002776005</p>
                                <p>Jingyin is the best.</p>

                                <ul className='team-icon'>
                                    <li><a href='#' className='linkedin'><i className='fa fa-linkedin'></i></a></li>
                                    <li><a href='#' className='github'><i className='fa fa-github'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About
