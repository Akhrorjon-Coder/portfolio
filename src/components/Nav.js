import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='navbarSection'>
                    <h1 className='logo'>kadirov</h1>
                    <div className='navbar'>
                        <ul>
                            <li><NavLink className={"navbar_link active"} to="/"><i className="fas fa-home"></i>home</NavLink></li>
                            <div className='line'></div>
                            <li><NavLink className={"navbar_link"}  to="/about"><i className="fas fa-user"></i>About</NavLink></li>
                            <div className='line'></div>
                            <li><NavLink className={"navbar_link"} to="/services"><i className="fas fa-user"></i>Services</NavLink></li>
                            <div className='line'></div>
                            <li><NavLink className={"navbar_link"} to="/portfolio"><i className="fas fa-user"></i>Portfolio</NavLink></li>
                            <div className='line'></div>
                            <li><NavLink className={"navbar_link"} to="/blog"><i className="fas fa-user"></i>Blog</NavLink></li>
                            <div className='line'></div>
                            <li><NavLink className={"navbar_link"} to="/contact"><i className="fas fa-user"></i>Contact</NavLink></li>
                            <div className='line'></div>
                        </ul>
                    </div>
                    <p className='leftfooter'>©Kadirov Developer</p>
                </div> 
        </>
    );
};


export default Nav;