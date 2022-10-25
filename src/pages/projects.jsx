import React from 'react';
import MyCard from '../compenents/MyCard';
import data from "../data.json"
function Projects() {
    return (
        <div id='projects' className='container'>
            <div className="text">
                <h1>These are some of my projects. </h1>
            </div>
            <MyCard img={data[0].image} title={data[0].title} description={data[0].description} link={data[0].link} />
            <MyCard img={data[1].image} title={data[1].title} description={data[1].description} link={data[1].link} />
            <MyCard img={data[2].image} title={data[2].title} description={data[2].description} link={data[2].link} youtubeLink={data[2].youtube} />

        </div>


    );
}

export default Projects;

