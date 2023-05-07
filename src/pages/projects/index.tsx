import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { groupByProjects } from '@site/src/data/projects';
import ShowcaseCard from './_components/ShowcaseCard/index';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';

const TITLE = translate({
  id: 'theme.project.title',
  message: 'My Portfolio Showcase',
})
const DESCRIPTION = translate({
  id: 'theme.project.description',
  message: 'Explore projects I have developed and contributed to',
})

const SUBMIT_URL = 'https://gitlab.com/fernandogprieto/';


function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center container">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={SUBMIT_URL}>
      <Translate id="theme.project.header.button">😎 Clone my repository</Translate>
      </Link>
    </section>
  );
}

function ShowcaseCards() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      {Object.entries(groupByProjects).map(([projectType, projects]) => (
        <div key={projectType} className={styles.showcaseGroup}>
          <div className="container">
            <div
              className={clsx(
                'margin-bottom--md',
                styles.showcaseGroupHeader,
              )}>
              <h2>{projectType}</h2>
            </div>
            <ul className={clsx('container', 'clean-list', styles.showcaseList)}>
              {projects.map((project) => (
                <ShowcaseCard key={project.title} project={project} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseCards />
      </main>
    </Layout>
  );
}
