import React from 'react';
import Skill from '../components/Skill';
import tux from '../../public/Tux.svg';
import something from '../../public/image.svg';
import security from '../../public/security.svg';
import browser from '../../public/browser.svg';
import aws from '../../public/AmazonWebservices_Logo.svg';
import upload from '../../public/upload.svg';

const Skills = () => (
  <div id="skills" className="container-fluid skills padding-top-bottom">
    <div className="container">
      <h2 className="text-center"> Skills </h2>
      <div className="row">
        <Skill
          title="Front End"
          img={browser}
          description="Responsive and lightweight front end applications"
        />
        <Skill
          title="Back End"
          img={upload}
          description="Building Fast and Scalable web infrastructures "
        />
        <Skill
          title="Linux"
          img={tux}
          description="From package management to shell scripting"
        />
      </div>
      <div className="row hidden-xs">
        <Skill
          title="UX"
          img={something}
          description="Customer focused and usability oriented UI designs"
        />
        <Skill
          title="Security"
          img={security}
          description="Employes best practices to produces safe web apps"
        />
        <Skill
          title="AWS"
          img={aws}
          description="From S3 to EC2 instances to DNS Management"
        />
      </div>
    </div>
  </div>
);

export default Skills;
