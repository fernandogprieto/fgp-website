import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='row'>
          <div className='col col--6 justified'>
          <h1 className="hero__title"><Translate> Welcome to my Cloud Journey</Translate></h1>
          <p>#Cloud, #Innovation, #Technology, #OpenSource</p>
          </div>
          <div className='col col--6 justified'>
              <img src="./svg/cloud.svg" />
            </div>
          </div>
        </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
