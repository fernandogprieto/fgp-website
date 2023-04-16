import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';
import ThemedImage from '@theme/ThemedImage';

function AboutpageHeader() {
  return (
    <header className={clsx('about', styles.about)}>
      <div className="container">
        <div className='row'>
          <div className='col col--6 '>
          <h1 className="about-title" title="About me">About me</h1>
          <h3 className="about-title"> IT Support Specialist | Service Specialist | Engineering | Customer Service | Cloud Computing Training </h3>
           <p>My expertise includes working in cloud-native environments, utilizing technologies such as Kubernetes, Terraform, and Python.
            I am also skilled in applying microservices, infrastructure technologies, and observability tools. In addition, I am proficient
            in Linux, Windows, and ITIL processes.</p>

            <p>I'm open source and cloud-native enthusiast. I enjoy discovering new technologies, contributing to community projects,
              and sharing my expertise with others in order to foster innovation and cooperation in the IT sector.</p>
              <div className="svg_row" >
              <ThemedImage
                alt="Discord icon"
                sources={{
                  light: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord.svg',
                  dark: 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord_light.svg',
                }}
              />

                <img
                src='https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord.svg'
                srcDark='https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/svg/discord_light.svg' />
              </div>
          </div>
          <div className='col col--4 avatar-container' >
              <img className='avatar-1' src= 'https://gitlab.com/fernandogprieto/fgp-website/-/raw/main/static/img/avatar.jpg' />
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
