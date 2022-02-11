import React from 'react';

const Home = () => {
    return (
        <>
            <div className='homeSection'>
                <div className='personImg'>
                </div>
                <div className='name'>
                    <h1>Akhrorjon Kadirov</h1>
                    <p className='disc'>
                        I'm a Web Developer
                    </p>
                </div>
                <div className='socials'>
                <i className="fab fa-telegram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fas fa-envelope-open-text"></i>
                </div>
            </div>
        </>
    );
};


export default Home;