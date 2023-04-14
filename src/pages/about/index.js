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
          <h1 className="about_title "> About me</h1>
          <p>  </p>
          </div>
          <div className='col col--4 avatar'>
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
