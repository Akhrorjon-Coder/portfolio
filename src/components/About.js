import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../style/main.css';

function About() {
  return (
    <section>
      <div className="aboutSection">
      <h2>About Me</h2>
      <div className='aboutContent'>
      <Tabs>
        <TabList>
          <Tab>
            <p>About Me</p>
          </Tab>
          <Tab>
            <p>Education</p>
          </Tab>
          <Tab>
            <p>Work History</p>
          </Tab>
          <Tab>
            <p>Programming Skills</p>
          </Tab>
          <Tab>
            <p>Projects</p>
          </Tab>
          <Tab>
            <p>Interests</p>
          </Tab>
        </TabList>
        <TabPanel>
          <h1 className='title'>I'm Akhrorjon Kadirov and <span>Web Developer</span></h1>
          <p className='discription'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of  of Lorem Ipsum.</p>
          <a href='akhrorjon.pdf' download='akhrorjon.pdf'>
            <button className='btn'>Download CV</button>
          </a>
          <a href='#'>
            <button className='btn'>Hire Me </button>
          </a>
        </TabPanel>
      
        <TabPanel>
          <div className="panel-content">
            <h3>Ferghana branch of Tashkent University of Information technologies</h3>
            <p className='discription'>Bachelor of Software Engineering, Faculty of Telecommunication Technologies and Vocational Education <span>(2018-2022)</span></p>
            <h3>National Youth Service Corps</h3>
            <p className='discription'>Ministry Of Science And Technogy. Ferghana city <span>(2018-2022)</span></p>
            <h3>High School</h3>
            <p className='discription'>Baghdad district of Fergana region <span>(2007-2015)</span></p>
          </div>
        </TabPanel>
      
        <TabPanel>
          <p>Work History</p>
        </TabPanel>

        <TabPanel>
          <div className="panel-content">
            <p className='skills'>Html</p>
            <ProgressBar completed={95} className="wrapper"
              barContainerClassName="container"
              completedClassName="barCompletedHtml"
              labelClassName="label"/>
              <p className='skills'>Css</p>
            <ProgressBar completed={90} className="wrapper"
              barContainerClassName="container"
              completedClassName="barCompletedCss"
              labelClassName="label"/>
              <p className='skills'>Scss</p>
            <ProgressBar completed={87} className="wrapper"
              barContainerClassName="container"
              completedClassName="barCompletedScss"
              labelClassName="label"/>
              <p className='skills'>Bootstrap</p>
            <ProgressBar completed={84} className="wrapper"
              barContainerClassName="container"
              completedClassName="barCompletedBS"
              labelClassName="label"/>
              <p className='skills'>JavaScript</p>
            <ProgressBar completed={82} className="wrapper"
              barContainerClassName="container"
              completedClassName="barCompletedJs"
              labelClassName="label"/>
              <p className='skills'>ReactJs</p>
            <ProgressBar completed={75} className="wrapper"
              barContainerClassName="container"
              completedClassName="barCompletedRj"
              labelClassName="label"/>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='projects'>
            <h3 className='projectsTitle'>Personol Portfolio</h3>
            <p className='discription'>
            Technologies Used: React JS, Bootsrap
            A Personal Portfolio website to showcase all my details and projects at one place.
            </p>
            <h3 className='projectsTitle'>Personol Portfolio</h3>
            <p className='discription'>
            Technologies Used: React JS, Bootsrap
            A Personal Portfolio website to showcase all my details and projects at one place.
            </p>
            <h3 className='projectsTitle'>Personol Portfolio</h3>
            <p className='discription'>
            Technologies Used: React JS, Bootsrap
            A Personal Portfolio website to showcase all my details and projects at one place.
            </p>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='interesting'>
            <h3>Teaching</h3>
            <p className='discription'>Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing.</p>
            <h3>Music</h3>
            <p className='discription'>Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on.</p>
            <h3>Competitive Gaming</h3>
            <p className='discription'>I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.</p>
          </div>
        </TabPanel>

      </Tabs>
      </div>
      </div>
    </section>
    
  );
}

export default About;

