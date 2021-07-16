import React, { useState, useEffect, Component } from 'react';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
import 'megadraft/dist/css/megadraft.css';
import { Link } from 'react-router-dom';
import redraft from 'redraft';
import styles from './news-editor.module.css';
import AtomicBlock from '../news-article/atomic-block/atomic-block';
import ImagePlugin from 'megadraft/lib/plugins/image/plugin';
import NewsArticle from '../news-article/news-article';

export const content = {
  renderData: {
    blocks: [
      {
        key: '7mj9j',
        text: '',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {
          src: 'https://www.kommersant.ru/Issues.photo/DAILY/2021/119/KMO_147489_00319_1_t219_223802.jpg',
          type: 'image',
          display: 'big',
        },
      },
      {
        key: '3us89',
        text: 'В МВД предлагают по-новому ставить на учет мигрантов и их работодателей',
        type: 'header-two',
        depth: 0,
        inlineStyleRanges: [{ offset: 0, length: 71, style: 'BOLD' }],
        entityRanges: [],
        data: {},
      },
      {
        key: 'fcu0j',
        text: '  Представленная МВД новая редакция закона об условиях въезда и пребывания иностранцев в РФ кардинально меняет схему легализации в стране трудовых мигрантов. Помимо патентов, для работы в России их предлагается обязать оформлять ID-карты, сдавать отпечатки пальцев, регистрироваться на портале госуслуг и вставать на учет в реестр иностранных работников. Желающие привлечь мигрантов работодатели должны записываться в другой реестр, указав требуемое число работников и передавая затем сведения о заключенных и расторгнутых контрактах. При этом предполагается не пускать в страну иностранцев без подписания «соглашения о лояльности», которое предполагает отказ от участия в несанкционированных собраниях, митингах и пикетах. Опрошенные “Ъ” эксперты не исключают, что новое законодательство усложнит наем мигрантов на стройки, а реестры станут «постоянным источником нервных ситуаций». ',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  },
  heading:
    'В МВД предлагают по-новому ставить на учет мигрантов и их работодателей',
  date: '12 мая 2021',
  link: 'https://www.kommersant.ru/doc/4897809',
  category: ['Политика', 'Мир', 'Общество'],
  image:
    'https://www.kommersant.ru/Issues.photo/DAILY/2021/119/KMO_147489_00319_1_t219_223802.jpg',
  commentaries: [
    {
      author: 'Mark Zuckerberg',
      date: '12 мая 14:88',
      text: 'Хочу передать привет бабушке',
    },
    {
      author: 'James Hetfield',
      date: '11 мая 14:88',
      text: 'Хочу передать привет дедушке, Хочу передать привет дедушке, Хочу передать привет дедушке, Хочу передать привет дедушке, Хочу передать привет дедушке',
    },
    {
      author: 'Ozzy Osbourne',
      date: '10 мая 14:88',
      text: 'John Michael "Ozzy" Osbourne (born 3 December 1948) is an English singer, songwriter, and television personality. He rose to prominence during the 1970s',
    },
  ],
};

export default function NewsEditor( {content} ) {

  
  const initialState = editorStateFromRaw(content.renderData);
  const [editorState, setEditorState] = useState(initialState);
  const [raw, setRaw] = useState(
    convertToRaw(initialState.getCurrentContent())
  );
  const [paste, setPaste] = useState(false);
  // state = {
  //   editorState: intialState,
  //   raw: convertToRaw(intialState.getCurrentContent()),
  //   paste: false,
  // };

  const handleUpdate = (editorState) => {
    setEditorState(editorState);
    setRaw(convertToRaw(editorState.getCurrentContent()));
    setPaste(false);
  };
  //   this.setState({
  //     editorState,
  //     raw: convertToRaw(editorState.getCurrentContent()),
  //     paste: false,
  //   });
  // };

  // handleLog = () => {
  //   const { raw } = this.state;
  //   console.log(raw); // eslint-disable-line no-console
  // };

  // handleLogJSON = () => {
  //   const { raw } = this.state;
  //   console.log(JSON.stringify(raw)); // eslint-disable-line no-console
  // };

  // handleLoad = (raw) => {

  //   this.setState({
  //     editorState: EditorState.createWithContent(convertFromRaw(raw)),
  //     raw,
  //     paste: false,
  //   });
  // };

  // handleSample = () => {
  //   this.setState({
  //     editorState: intialState,
  //     raw: convertToRaw(intialState.getCurrentContent()),
  //     paste: false,
  //   });
  // };

  // togglePaste = () => {
  //   this.setState(state => ({
  //     paste: !state.paste,
  //   }));
  // };

  //const { raw, editorState, paste } = this.state;
  return (
    <>
      <NewsArticle content={content} />
      <div style={{ marginLeft: '80px' }}>
        <div className='App-label'>editor</div>
        <MegadraftEditor
          plugins={[ImagePlugin]}
          editorState={editorState}
          onChange={handleUpdate}
        />
      </div>
      <button onClick={() => console.log(raw, JSON.stringify(raw))}>
        asas
      </button>
    </>
  );
}
