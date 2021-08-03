import stsLogo from '../images/icons/channels/sts_logo.svg';
import oneTvLogo from '../images/icons/channels/1tv_logo.png';
import fifthChannelLogo from '../images/icons/channels/5_channel_logo.svg';
import foxLogo from '../images/icons/channels/fox_logo.svg';
import nbcLogo from '../images/icons/channels/nbc_logo.svg';
import netflixLogo from '../images/icons/channels/netflix_logo.svg';
import rbcLogo from '../images/icons/channels/rbc_logo.svg';

export const baseUrl = 'https://api.allchannels.ru';
// export const baseUrl = "http://localhost:3001";

export const headers = {
  'Content-Type': 'application/json',
};

export const channelsData = [
  {name: "СТС", logo: stsLogo},
  {name: "Первый канал", logo: oneTvLogo},
  {name: "Пятый канал", logo: fifthChannelLogo},
  {name: "FOX", logo: foxLogo},
  {name: "NBC", logo: nbcLogo},
  {name: "Netflix", logo: netflixLogo},
  {name: "RBK", logo: rbcLogo}
];

export const checkError = async (res) => {
  if (res.ok) {
    return res.json();
  }
  await res
    .text()
    .then((text) => {
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    })
    .then((text) => {
      return Promise.reject(text.message || text.error || text);
    });
};

export const formatDate = (item) => {
  if (item) {
    const date = new Date(item.date);
    const months = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];
    const formattedDate = `${
      date.toString().split('').slice(0, 15).join('').split(' ')[2]
    } ${months[date.getMonth()]} ${date.getFullYear()}`;

    return formattedDate;
  }
};
