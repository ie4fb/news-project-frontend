import styles from './news-item-horizontal.module.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { formatDate } from '../../utils/utils';
import commentsIcon_light from '../../images/icons/comments_light.svg';
import { getExchangeRates } from '../../utils/api';
import CurrencyBlock from '../currency-block/currency-block';

export default function MewsItemHorizontal({
  item,
  additionalStyle,
  isFirstBlock,
  maxTextLength,
  maxHeadingLength,
  isMobile,
  isBottom
}) {
  const history = useHistory();
  const [exchangeRates, setExchangeRates] = useState(null);
  const openArticle = () => {
    history.push(`/news/${item.category}/${item._id}`);
  };

  useEffect(() => {
    if (isFirstBlock) {
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
    }
  }, []);
  useEffect(() => {
    console.log(exchangeRates);
  }, [exchangeRates]);

  const formattedDate = item ? formatDate(item) : '';
  return (
    <>
      {item && (
        <div className={`${styles.wrapper} ${isBottom?styles.wrapper_bottom : ''}`}style={{ gridArea: additionalStyle }}>
          <div onClick={openArticle} className={styles.container}>
            <p className={`${styles.tag}`}>{item.category}</p>
            <h3 className={styles.heading}>
              {' '}
              {`${
                item.heading.split('').length > maxHeadingLength
                  ? item.heading.split('').slice(0, maxHeadingLength).join('') +
                    '...'
                  : item.heading
              }`}
            </h3>
            <p className={styles.text}>
              {`${
                item.description.split('').slice(0, maxTextLength).join('') +
                '...'
              }`}
            </p>
            <div className={styles.bottom_wrapper}>
              <p className={`${styles.date}`}>{formattedDate}</p>
              <div className={styles.comments_wrapper}>
                <img
                  src={commentsIcon_light}
                  className={styles.icon}
                  alt='иконка'
                />
                <p className={`${styles.comments_count}`}>
                  {item.comments.length}
                </p>
              </div>
            </div>
          </div>
          {isFirstBlock && <CurrencyBlock />}
        </div>
      )}
    </>
  );
}
