import React from 'react';
import styles from './InputGroup.module.css';
import Input from '../Input';
export default function InputGroup({ inputName, placeholder }) {
  return (
    <div className={styles.inputGroup}>
      <p className={styles.inputName}>
        {inputName} <span className={styles.inputStar}>*</span>
      </p>
      <Input placeholder={placeholder} />
    </div>
  );
}
