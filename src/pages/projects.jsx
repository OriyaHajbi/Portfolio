import React from 'react';
import MyCard from '../compenents/MyCard';
import data from "../data.json"
import "../css/projects.css";

function Projects(props) {
    return (
        <div id='projects' className={`projects ${props.modeClass}backgroundModeprojects `}>
            <div className={`${props.modeClass}projects`}>
                <h1 className='titleup'>These are some of my projects. </h1>
            </div>
            <MyCard img={data[0].image} title={data[0].title} description={data[0].description} link={data[0].link} modeClass={props.modeClass} />
            <MyCard img={data[1].image} title={data[1].title} description={data[1].description} link={data[1].link} modeClass={props.modeClass} />
            <MyCard img={data[2].image} title={data[2].title} description={data[2].description} link={data[2].link} youtubeLink={data[2].youtube} modeClass={props.modeClass} />
            <div className={`${props.modeClass}projects`}>
                <h1 className='titlebottom'>Wait for more projects!. </h1>
            </div>
        </div>


    );
}

export default Projects;

