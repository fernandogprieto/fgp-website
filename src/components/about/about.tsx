import React, { FunctionComponent } from "react";
import clsx from "clsx";
import styles from './about.module.scss';
import Image from "@theme/IdealImage";

export interface AboutmeProps {
  avatar: string;
  descriptionComponent: React.ReactNode;
}

export const AboutMe: FunctionComponent<AboutmeProps> = ({
  avatar,
  descriptionComponent,
}) => {
  return (
    <div className="margin-top--lg">
      <h2>About me</h2>
      <div className="row">
        <div className="col col--6">{descriptionComponent}</div>
        <div className={clsx("col col--5", styles.avatarContainer)}>
          <div className={styles.avatar}>
         <Image img={avatar} />
          </div>
        </div>
      </div>
    </div>
  );
};
