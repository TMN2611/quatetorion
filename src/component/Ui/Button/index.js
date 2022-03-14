import styles from './Button.module.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function Button({
  hotline,
  primary,
  secondary,
  title,
  fullWidth,
  ...props
}) {
  let Button = 'button';

  if (props.href) {
    Button = 'a';
  }

  return (
    <Button
      {...props}
      style={{ width: fullWidth ? '100%' : '' }}
      className={clsx(styles.button, {
        [styles.buttonHotline]: hotline,
        [styles.buttonPrimary]: primary,
        [styles.buttonSecondary]: secondary,
      })}
    >
      {title}
      {hotline ? (
        ''
      ) : (
        <i
          className={clsx('fa-solid fa-angles-right', [styles.buttonIcon])}
        ></i>
      )}
    </Button>
  );
}
