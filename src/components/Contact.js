import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2>Contact Me</h2>
            <div className='contactSection'>
                <div className='container'>
                    <div className='card'>
                    <i className="fas fa-phone-alt"></i>
                    <h3>Call Us On</h3>
                    <a href='#'>+998940399899</a>
                    </div>
                    <div className='card'>
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Address</h3>
                    <a href='#'>14 A Mustakillik Street</a>
                    </div>
                    <div className='card'>
                    <i className="fas fa-envelope"></i>
                    <h3>Email</h3>
                    <a href='#'>akhrorjonkadirov@gamil.com</a>
                    </div>
                </div>
                    <div className='inputContent'>
                        <input type='text' placeholder='Name...'></input>
                        <input type='email' placeholder='Email...'></input>
                    </div>
                    <input type='text' placeholder='Subject...'></input>
                    <textarea rows='8' cols='30'></textarea>
                    <button className='btn'>Send Message</button>
            </div>
        </section>
    );
};


export default Contact;