import React from 'react';
import clsx from 'clsx';

function AboutColumn({ title, children }) {
  return (
    <div className={clsx('col col--6')}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function AboutComponent() {
  return (
    <div className="container">
      <div className="row">
        <AboutColumn title="Who am I?">
          <p>
            Write a paragraph about yourself here. This is just an example.
          </p>
        </AboutColumn>
        <AboutColumn title="My Expertise">
          <p>
            Write a paragraph about your expertise here. This is just an example.
          </p>
        </AboutColumn>
      </div>
    </div>
  );
}

export default AboutComponent;
