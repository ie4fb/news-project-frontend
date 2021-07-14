import { useEffect, useState } from 'react';
import { getExchangeRates } from '../../utils/api';
import styles from './currency-block.module.css';

export default function CurrencyBlock() {
  const [exchangeRates, setExchangeRates] = useState(null);
  useEffect(() => {
    getExchangeRates().then((res) =>
      setExchangeRates({
        usd: `${
          res.Valute.USD.Value.toString().split('.')[0] +
          ',' +
          res.Valute.USD.Value.toString()
            .split('.')[1]
            .split('')
            .slice(0, 2)
            .join('')
        }`,
        eur: `${
          res.Valute.EUR.Value.toString().split('.')[0] +
          ',' +
          res.Valute.EUR.Value.toString()
            .split('.')[1]
            .split('')
            .slice(0, 2)
            .join('')
        }`,
        gbp: `${
          res.Valute.GBP.Value.toString().split('.')[0] +
          ',' +
          res.Valute.GBP.Value.toString()
            .split('.')[1]
            .split('')
            .slice(0, 2)
            .join('')
        }`,
      })
    );
  }, []);

  return (
    <div className={styles.currency}>
      <h3 className={`${styles.heading} ${styles.heading_currency}`}>
        Курсы валют
      </h3>
      {exchangeRates && (
        <div className={styles.wrapper}>
          <div className={styles.currency_container}>
            <p className={styles.currency_name}>USD</p>
            <p className={styles.currency_value}>{exchangeRates.usd}</p>
          </div>
          <div className={styles.currency_container}>
            <p className={styles.currency_name}>EUR</p>
            <p className={styles.currency_value}>{exchangeRates.eur}</p>
          </div>
          <div className={styles.currency_container}>
            <p className={styles.currency_name}>GBP</p>
            <p className={styles.currency_value}>{exchangeRates.gbp}</p>
          </div>
        </div>
      )}
    </div>
  );
}
