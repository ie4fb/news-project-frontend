import { useEffect, useState } from 'react';
import tabStyles from './tab.module.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function Tab({ path, label, onClick, activeTab }) {
  const [isActive, setIsActive] = useState(false);

  const history = useHistory();
  useEffect(() => {
    if (path.split('/')[1] === history.location.pathname.split('/')[1]) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [history.location.pathname, path]);

  return (
    <div
      className={tabStyles.tab}
      onClick={() => {
        onClick(path);
      }}
    >
      <Link className={tabStyles.link} to={path}>
        <p
          className={`${tabStyles.label} ${
            isActive ? tabStyles.label_inactive : ' '
          }`}
        >
          {label}
        </p>
        {isActive && <div className={tabStyles.active_indicator}></div>}
      </Link>
    </div>
  );
}
