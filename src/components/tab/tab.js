import { useEffect, useState } from 'react';
import tabStyles from './tab.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

export default function Tab({ path, label, onClick }) {
  const [isActive, setIsActive] = useState(false);
  const {activeTab} = useSelector(store => store.app)

  const history = useHistory();
  useEffect(() => {
    if (path.split('/')[1] === activeTab) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [path, activeTab]);

  return (
      <Link onClick={() => {
        onClick(path);
      }} className={tabStyles.link} to={path}>
        <p
          className={`${tabStyles.label} ${
            isActive ? tabStyles.label_inactive : ' '
          }`}
        >
          {label}
        </p>
        {isActive && <div className={tabStyles.active_indicator}></div>}
      </Link>
  );
}
