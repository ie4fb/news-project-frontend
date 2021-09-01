import styles from './channel-item.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CURRENT_CHANNEL } from '../../../services/actions/player';

export default function ChannelItem({ item }) {
  const { currentChannel } = useSelector((store) => store.player);
  const dispatch = useDispatch();

  const changeChannel = () => {
    dispatch({ type: SET_CURRENT_CHANNEL, link: item.link });
    if (window.pljssglobal.length > 0) {
        window.pljssglobal[0].api("play", item.link);
      }
  };

//   function PlayNewVideo() {
//     if (window.pljssglobal.length > 0) {
//       window.pljssglobal[0].api("play", "https://plrjs.com/new.mp4");
//     }
//   }

  return (
    <li
      onClick={changeChannel}
      className={`${styles.channel} ${
        currentChannel === item.link ? styles.channel_active : ''
      } `}
    >
      <img className={styles.logo} src={item.logo} alt='иконка канала' />
      <p className={styles.channel_name}>{item.name}</p>
    </li>
  );
}
