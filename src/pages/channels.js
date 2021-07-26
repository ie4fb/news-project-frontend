import PlayerBlock from '../components/player/player';
import Main from '../components/main/main';
import { useEffect } from 'react';
import { SET_ACTIVE_TAB } from '../services/actions/app';
import { useDispatch, useSelector } from 'react-redux';

export default function Channels() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SET_ACTIVE_TAB,
      tab: 'channels',
    });
  }, [dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Main>
      <PlayerBlock />
    </Main>
  );
}
