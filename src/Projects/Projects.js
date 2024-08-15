import React from 'react';
import './Projects.css';

import { useNavigate } from 'react-router-dom';
function Projects() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate('/'+path);
  };
  return (
    <div className="header">
      <div className="rishi-container">
        <div className="rishi"> rishi. </div>
      </div>
      <div className="route-container">
        <div className="route-item">
          <span className="route-text" onClick={() => handleClick('')}> Home </span>
        </div>
        <div className="route-item">
          <span className="route-text" onClick={() => handleClick('Timeline')}> Timeline </span>
        </div>
        <div className="route-item">
          <span className="route-text" onClick={() => handleClick('Projects')}> Projects </span>
        </div>
        <div className="route-item">
          <span className="route-text" onClick={() => handleClick('Blogs')}> Blogs </span>
        </div>
      </div>
    </div>
  );
}


export default Projects;
