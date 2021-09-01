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
  {
    name: '360 Новости',
    logo: 'https://fast.ntvplus.tv/files/image/30/43/13/-channel!1ep.png ',
    link: 'https://lyfwb59804a.a.trbcdn.net/AllChannels/360_Novosti_SD/master.m3u8',
  },
  {
    name: '8 канал',
    logo: 'https://fast.ntvplus.tv/files/image/01/16/82/-channel!vub.png',
    link: 'https://dtonzu0k2xu.a.trbcdn.net/AllChannels/8_Kanal_SD/master.m3u8',
  },
  {
    name: 'Калейдоскоп',
    logo: 'https://s6.vcdn.biz/static/f/765057651/image.jpg/pt/r300x423x4',
    link: 'https://l0o4icbtyl2.a.trbcdn.net/AllChannels/Kaleidoskop_SD/master.m3u8',
  },
  {
    name: 'Luxury',
    logo: 'https://www.pavlodar.tv/images/tricolor/channel/luxury.jpg',
    link: 'https://edz877x90d8.a.trbcdn.net/AllChannels/Luxury_SD/master.m3u8',
  },
  {
    name: 'О кино',
    logo: 'https://avatars.mds.yandex.net/get-tv-channel-logos/69315/2a000001690fb951ca7f547cffdbb97cc413/160x120',
    link: 'https://tom09zrfuqu.a.trbcdn.net/AllChannels/O_Kino_SD/master.m3u8',
  },
  {
    name: 'Резонанс',
    logo: 'https://static.wikia.nocookie.net/tvpedia/images/c/c5/%D0%A0%D0%B5%D0%B7%D0%BE%D0%BD%D0%B0%D0%BD%D1%81_TV_%282021%2C_%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9_%D1%84%D0%BE%D0%BD%29.png/revision/latest/scale-to-width-down/497?cb=20210716152203&path-prefix=ru',
    link: 'https://tqzlkb54nm6.a.trbcdn.net/AllChannels/Rezonans/master.m3u8',
  },
  {
    name: 'Тномер',
    logo: 'https://tv-kanali.online/wp-content/uploads/2019/03/tnomer.jpg',
    link: 'https://smopvpedpwf.a.trbcdn.net/AllChannels/Tnomer_SD/master.m3u8',
  },
  {
    name: 'TVM Channel',
    logo: 'http://online-red.tv/uploads/posts/2018-07/1530619990_tvm-channel.png',
    link: 'https://tgevdwip5yq.a.trbcdn.net/AllChannels/TVM_Channel_SD/master.m3u8',
  },
  {
    name: 'Вместе РФ',
    logo: 'https://www.sostav.ru/app/public/images/news/2013/04/24/544011_442266252523596_1292416099_n.jpg?rand=0.7892239505890757',
    link: 'https://4556i4qk5o7.a.trbcdn.net/AllChannels/Vmeste_RF/master.m3u8',
  },
  {
    name: '7 ТВ',
    logo: 'https://online-red.com/images/tv/7-tv.png',
    link: 'https://usv6vhgqcrz.a.trbcdn.net/AllChannels/7_TV/master.m3u8',
  },
  {
    name: 'Народная музыка',
    logo: 'https://www.cableman.ru/sites/default/files/telekanal_narodnoy_muzyki.jpg?1619596434',
    link: 'https://vetf5wsrxs4.a.trbcdn.net/AllChannels/Folk_Music_SD/master.m3u8',
  },
  {
    name: 'Красная линия',
    logo: 'https://online-red.com/images/tv/rline.png',
    link: 'https://5milq9hfio7.a.trbcdn.net/AllChannels/Krasnaya_Linya_SD/master.m3u8',
  },
  {
    name: 'Nano TV',
    logo: 'http://img.b612.tightvideo.com/channels/nanotv.png',
    link: 'https://n1c29mau4p6.a.trbcdn.net/AllChannels/Nano_TV_SD/master.m3u8',
  },
  {
    name: 'Открытый мир',
    logo: 'http://ots-net.ru/images/upload/news/%D0%BC%D0%B8%D1%80.jpg',
    link: 'https://nfrn1d9fnj5.a.trbcdn.net/AllChannels/Otkrytyi_mir_SD/master.m3u8',
  },
  {
    name: 'Ратник',
    logo: 'https://obob.tv/wp-content/uploads/2017/09/ratnik-e1506103349962.jpg',
    link: 'https://1wm5py39by8.a.trbcdn.net/AllChannels/Ratnik/master.m3u8',
  },
  {
    name: 'TDK',
    logo: 'https://www.cableman.ru/sites/default/files/tdk.png?1554447118',
    link: 'https://c1i9h1ytv4g.a.trbcdn.net/AllChannels/TDK_SD/master.m3u8',
  },
  {
    name: 'ТНВ Планета',
    logo: 'https://online-red.com/images/tv/tnv-planeta.png',
    link: 'https://xuyucxtdbb4.a.trbcdn.net/AllChannels/TNV_Planeta_SD/master.m3u8',
  },
  {
    name: 'Ювелирочка',
    logo: 'https://i.mycdn.me/image?id=901010958414&t=50&plc=WEB&tkn=*WJUJjMCy46YsWT_kHjsLwr39nYU&fn=external_8',
    link: 'https://53231kgpfi8.a.trbcdn.net/AllChannels/Uvelirochka_SD/master.m3u8',
  },
  {
    name: 'Продвижение',
    logo: 'https://www.cableman.ru/sites/default/files/prodvizhenie.png?1615826616',
    link: 'https://0pfk1qljy6s.a.trbcdn.net/AllChannels/Prodvizhenie_SD/master.m3u8',
  },
  {
    name: 'Первый национальный',
    logo: 'https://nablagomira.ru/uploads/friends/5f2295bde37d9907897376.jpg',
    link: 'https://k6mnnpdgdcw.a.trbcdn.net/AllChannels/Pervyi_Nacionalnyi/master.m3u8',
  },
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
