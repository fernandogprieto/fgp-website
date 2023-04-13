import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About Page">
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h2>About Me</h2>
            <p>
              Hi, I'm [Your Name]. I am a [Your Profession] with expertise in [Your Expertise].
              I have been working in the industry for [Number of Years] years and have developed
              a strong skillset in [List of Skills].
            </p>
          </div>
          <div className="col col--6">
          <img src="/static/img/cloud.svg" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
