import { useEffect, useState } from 'react';
import tabStyles from './tab.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function Tab({ path, label, onClick, activeTab }) {

  return (
    <div className={tabStyles.tab} onClick={() => {onClick(path)}}>
      <Link className={tabStyles.link} to={path}>
        <p
          className={`${tabStyles.label} ${
            path !== activeTab ? tabStyles.label_inactive : ' '
          }`}
        >
          {label}
        </p>
        {path === activeTab && (
          <div className={tabStyles.active_indicator}></div>
        )}
      </Link>
    </div>
  );
}
