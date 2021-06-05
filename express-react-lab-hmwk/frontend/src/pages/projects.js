import { useState, useEffect } from "react";
// import { Button } from 'react-bulma-components';
// import "bulma/sass/utilities/_all.sass";
// import "bulma/sass/elements/button.sass";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div className="contents">
        <h1>{project.name}</h1>
        <img src={project.image} class="projImage"/><br/>
        <a href={project.git}>
          {/* <button class="button is-primary">Github</button> */}
          <button>Github</button>

        </a>
        <a href={project.live}>
          {/* <button class="button is-large">live site</button> */}
          <button>Live Site</button>

        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;