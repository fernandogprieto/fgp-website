import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';

function AboutpageHeader() {
  return (
    <header className={clsx('about', styles.about)}>
      <div className="container">
        <div className='row'>
          <div className='col col--6 '>
          <h1 title="About me">About me</h1>

          <h3> IT Support Specialist | Service Specialist | Engineering | Customer Service | Cloud Computing Training </h3>

           <p> My expertise extends to working in a cloud-native environment, utilizing technologies such as Kubernetes,
            Terraform, and Python, as well as applying microservices, infrastructure technologies, and observability tools.
            I am proficient in Linux, Windows, and ITIL processes.</p>

            <p>I'm open source and cloud-native enthusiast. I enjoy discovering new technologies, contributing to community projects,
              and sharing my expertise with others in order to foster innovation and cooperation in the IT sector.</p>
          </div>
          <div className='col col--4'>
              <img className='avatar-1' src="https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/avatar.jpg"/>
            </div>
          </div>
        </div>
    </header>
  );
}

export default function About() {
  return (
    <Layout>
      <AboutpageHeader />
    </Layout>
  );
}
