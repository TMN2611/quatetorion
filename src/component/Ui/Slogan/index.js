import React from 'react';
import styles from './Slogan.module.css';
import clsx from 'clsx';
export default function Slogan({
  sloganTop,
  sloganTitle,
  description,
  right,
  center,
  maxWidthDesc,
  maxWidthTitle,
  textColor,
  uppercaseTitle,
}) {
  const classes = clsx(styles.sloganMain, {
    [styles.sloganRight]: right,
    [styles.sloganCenter]: center,
  });
  return (
    <div className={classes} style={{ color: textColor }}>
      <h1 className={styles.sloganTop}>{sloganTop}</h1>
      <h3
        className={styles.sloganTitle}
        style={{
          textTransform: uppercaseTitle ? 'uppercase' : '',
          maxWidth: maxWidthTitle,
        }}
      >
        {sloganTitle}
      </h3>
      <p className='desc' style={{ maxWidth: maxWidthDesc }}>
        {description}
      </p>
    </div>
  );
}
