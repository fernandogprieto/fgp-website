import React from 'react';
import Layout from '@theme/Layout';
import AboutComponent from '../../components/about/AboutComponent.jsx';

function AboutPage() {
  return (
    <Layout title="About" description="About Page">
      <AboutComponent />
      <img src="/static/img/logo.svg" />
    </Layout>
  );
}

export default AboutPage;
