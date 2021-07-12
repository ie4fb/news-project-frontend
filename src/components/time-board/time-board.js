import { useState } from 'react';
import timeBoardStyles from './time-board.module.css';
import  useInterval  from '../../hooks/useInterval';

export default function TimeBoard() {
  const date = new Date();
  const [time, setTime] = useState({moscow: '00:00', berlin: '00:00', ny:'00:00'})

  const updateTime = () => {
      setTime({
          moscow: date.toLocaleTimeString('en-GB', {
            timeZone: 'Europe/Moscow',
            hour: '2-digit',
            minute: '2-digit',
          }),
          berlin: date.toLocaleTimeString('en-GB', {
            timeZone: 'Europe/Berlin',
            hour: '2-digit',
            minute: '2-digit',
          }),
          ny: date.toLocaleTimeString('en-GB', {
            timeZone: 'America/New_York',
            hour: '2-digit',
            minute: '2-digit',
          })
      })
  }
  useInterval(() => {
      updateTime();
  }, 200)


  return (
      <div className={timeBoardStyles.container}>
          <div className={timeBoardStyles.timer}>
              <p className={timeBoardStyles.locale}>
                  Москва
              </p>
              <p className={timeBoardStyles.time}>
                  {time.moscow}
              </p>
          </div>
          <div className={timeBoardStyles.timer}>
              <p className={timeBoardStyles.locale}>
                  Берлин
              </p>
              <p className={timeBoardStyles.time}>
                  {time.berlin}
              </p>
          </div>
          <div className={timeBoardStyles.timer}>
              <p className={timeBoardStyles.locale}>
                  Нью-Йорк
              </p>
              <p className={timeBoardStyles.time}>
                  {time.ny}
              </p>
          </div>
      </div>
  );
}
