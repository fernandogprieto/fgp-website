import React, { useRef }  from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import {
  Tags,
  TagList,
  type TagType,
  type Project,
  type Tag,
} from '@site/src/data/projects';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import Tooltip from '../ShowcaseTooltip';
import styles from './styles.module.css';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({label, color, description}, ref) => (
    <li ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  ),
);

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
  TagList.indexOf(tagObject.tag),
);

return (
  <>
    {tagObjectsSorted.map((tagObject, index) => {
      const id = `showcase_card_tag_${tagObject.tag}`;

      return (
        <Tooltip
          key={index}
          text={tagObject.description}
          anchorEl="#__docusaurus"
          id={id}>
          <TagComp key={index} {...tagObject} />
        </Tooltip>
      );
    })}
  </>
);
}

function ShowcaseCard({ project }: { project: Project }) {
  const domTarget = useRef(null);
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 500, friction: 40 },
  }));

  useGesture(
    {
      onHover: ({ hovering }) =>
        hovering ? api({ scale: 1.05 }) : api({ scale: 1 }),
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <animated.li
      ref={domTarget}
      style={{
        transform: 'perspective(100px)',
        scale,
      }}
      key={project.title}
      className="card shadow--md"
    >
      {project.preview && (
        <div className={clsx('card__image', styles.showcaseCardImage)}>
          <Image
            src={project.preview}
            alt={project.title}
            img={project.preview}
          />
        </div>
      )}
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={project.website} className={styles.showcaseCardLink}>
              {project.title}
            </Link>
          </Heading>
          {project.tags.includes('favorite') && (
            <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
          )}
          {project.source && (
            <Link
              href={project.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}
            >
              <Translate id="showcase.card.sourceLink">source</Translate>
            </Link>
          )}
          {project.docs && (
            <Link
              href={project.docs}
              className={clsx(
                'button button--secondary button--sm',
                styles.showcaseCardSrcBtn,
              )}
            >
              <Translate id="showcase.card.docsLink"> docs</Translate>
            </Link>
          )}
        </div>
        <p className={styles.showcaseCardBody}>{project.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <ShowcaseCardTag tags={project.tags} />
      </ul>
    </animated.li>
  );
}

export default React.memo(ShowcaseCard);
