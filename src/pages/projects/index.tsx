import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import { sortedUsers } from '@site/src/data/users';
import ShowcaseCard from './_components/ShowcaseCard';
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
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary" to={SUBMIT_URL}>
      <Translate id="theme.project.header.button">😎 Clone my repository</Translate>
      </Link>
    </section>
  );
}

const favoriteUsers = sortedUsers.filter((user) =>
  user.tags.includes('favorite'),
);
const otherUsers = sortedUsers.filter(
  (user) => !user.tags.includes('favorite'),
);

function ShowcaseCards() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className={styles.showcaseFavorite}>
        <div className="container">
          <div
            className={clsx(
              'margin-bottom--md',
              styles.showcaseFavoriteHeader,
            )}>
            <h2>Our favorites</h2>
          </div>
          <ul className={clsx('container', 'clean-list', styles.showcaseList)}>
            {favoriteUsers.map((user) => (
              <ShowcaseCard key={user.title} user={user} />
            ))}
          </ul>
        </div>
      </div>
      <div className="container margin-top--lg">
        <h2 className={styles.showcaseHeader}>All sites</h2>
        <ul className={clsx('clean-list', styles.showcaseList)}>
          {otherUsers.map((user) => (
            <ShowcaseCard key={user.title} user={user} />
          ))}
        </ul>
      </div>
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
