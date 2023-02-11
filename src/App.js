import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';
import projects from './projects.json';

axios.defaults.baseURL = 'https://resume.markguiang.dev';

const App = () => {
    const [visits, setVisits] = useState(0);
    useEffect(() => {
        axios.post('/hits').then(() => {
	    axios.get('/hits').then(res => {
		setVisits(res.data['unique-visitors']);
	    });
        });
    }, []);
    
  return (
    <div className="App">
        <div className="Name">
            <p style={{fontSize: "2em"}}>
                <b>MARK GUIANG</b>
            </p>
            <p>
                09973422709 ◇ Tarlac City, Tarlac
            </p>
            <p>
                mrguiang@up.edu.ph ◇ github.com/mahikgot
            </p>
        </div>
        <div className="Education">
            <p>
                <b>EDUCATION</b>
            </p>
            <hr/>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>
                    <b>BS in Computer Engineering</b>
                    , University of the Philippines - Diliman
                </p>
                <p>
                    September 2019 - Present
                </p>
            </div>
        </div>
        <div className="Skills">
            <p>
                <b>SKILLS</b>
            </p>
            <hr/>
            <div className="SkillsContainer">
                <div className="SkillsFlex">
                    <p>Languages</p>
                    <p>Technology</p>
                    <p>Tools</p>
                    <p>Others</p>
                </div>
                <div className="Names">
                    <p>Python, Javascript, C/C++</p>
                    <p>React, MySQL, Google Cloud</p>
                    <p>Git, Docker</p>
                    <p>Microcontrollers, Sensor Systems</p>
                </div>
            </div>
        </div>
        <div>
            <p>
                <b>Projects</b>
            </p>
            <hr/>
            {projects.batch.map((project) => (
                <Project
                    {...project}
                    key={project.name}
                />
            ))}
        </div>
        <div className="Footer">
            <hr/>
            <p>Unique Visitors: {visits}</p>
        </div>
    </div>
  );
};

export default App;
