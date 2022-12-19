import React from 'react';
import MyCard from '../compenents/MyCard';
import data from "../data.json"
import "../css/projects.css";

function Projects(props) {
    return (
        <div id='projects' className={`projects ${props.modeClass}backgroundModeprojects `}>
            <div className={`${props.modeClass}projects`}>
                <h1 className='title titleup'>These are some of my projects. </h1>
            </div>
            <MyCard img={data[0].image} title={data[0].title} description={data[0].description} githubLink={data[0].githubLink} modeClass={props.modeClass} projectLink={data[0].projectLink} />
            <MyCard img={data[1].image} title={data[1].title} description={data[1].description} githubLink={data[1].githubLink} modeClass={props.modeClass} />
            <MyCard img={data[2].image} title={data[2].title} description={data[2].description} githubLink={data[2].githubLink} modeClass={props.modeClass} />
            <MyCard img={data[3].image} title={data[3].title} description={data[3].description} githubLink={data[3].githubLink} youtubeLink={data[3].youtube} modeClass={props.modeClass} />
            <div className={`${props.modeClass}projects`}>
                <h1 className='title titlebottom'>Wait for more projects!. </h1>
            </div>
        </div>


    );
}

export default Projects;

