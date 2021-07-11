import React from 'react';
import tagStyles from './tag-item.module.css';

export default function TagItem({ text, onClick, onMainPage }) {
  return (
    <div
      className={`${tagStyles.container} ${
        onMainPage ? tagStyles.clickable : ''
      }`}
    >
      <p className={tagStyles.label}>{text}</p>
    </div>
  );
}
