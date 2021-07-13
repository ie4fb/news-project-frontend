import { useEffect, useState } from 'react';
import redraft from 'redraft';
import styles from './news-article.css';
import AtomicBlock from './atomic-block/atomic-block';
import { MegadraftEditor, editorStateFromRaw } from 'megadraft';
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import TagsSection from '../tags-section/tags-section';
import Commentaries from '../commentaries/commentaries';
import { useParams } from 'react-router';

const processRenderData = (data) => {
  const content = editorStateFromRaw(data.renderData);
  const raw = convertToRaw(content.getCurrentContent());
  const heading = data.heading;
  const date = data.date;
  const link = data.link;
  const categories = data.category;
  const commentaries = data.comments;

  return { raw, heading, date, link, categories, commentaries };
};

export default function NewsArticle({ content }) {
  const { id } = useParams();

  const data = content.find((item) => item._id === id);


  const { raw, heading, date, link, categories, commentaries } = data
    ? processRenderData(data)
    : {
        raw: null,
        heading: null,
        date: null,
        link: null,
        categories: null,
        commentaries: null,
      };

  const addBreaklines = (children) => children.map((child) => [child, <br />]);

  const isEmptyRaw = (raw) =>
    !raw ||
    !raw.blocks ||
    (raw.blocks.length === 1 && raw.blocks[0].text === '');
  const entities = {
    LINK: (children, entity, { key }) => (
      <a key={key} href={entity.url}>
        {children}
      </a>
    ),
  };

  const getAtomic = (children, { data, keys }) =>
    data.map((item, i) => <AtomicBlock key={keys[i]} {...data[i]} />);

  const blocks = {
    unstyled: (children, { keys }) => (
      <p key={keys[0]}>{addBreaklines(children)}</p>
    ),
    atomic: getAtomic,
    blockquote: (children, { keys }) => (
      <blockquote key={keys[0]}>{addBreaklines(children)}</blockquote>
    ),
    'header-one': (children, { keys }) =>
      children.map((child, i) => <h1 key={keys[i]}>{child}</h1>),
    'header-two': (children, { keys }) =>
      children.map((child, i) => <h2 key={keys[i]}>{child}</h2>),
    'header-three': (children, { keys }) =>
      children.map((child, i) => <h3 key={keys[i]}>{child}</h3>),
    'header-four': (children, { keys }) =>
      children.map((child, i) => <h4 key={keys[i]}>{child}</h4>),
    'header-five': (children, { keys }) =>
      children.map((child, i) => <h5 key={keys[i]}>{child}</h5>),
    'header-six': (children, { keys }) =>
      children.map((child, i) => <h6 key={keys[i]}>{child}</h6>),
    'code-block': (children, { keys }) => (
      <pre key={keys[0]} style={styles.codeBlock}>
        {addBreaklines(children)}
      </pre>
    ),
  };

  const options = {
    cleanup: {
      after: 'all',
      types: 'all',
      split: true,
    },
  };

  const inline = {
    BOLD: (children, { key }) => <strong key={key}>{children}</strong>,
    ITALIC: (children, { key }) => <em key={key}>{children}</em>,
    UNDERLINE: (children, { key }) => <u key={key}>{children}</u>,
    CODE: (children, { key }) => (
      <span key={key} style={styles.code}>
        {children}
      </span>
    ),
  };
  const isEmpty = isEmptyRaw(raw);
  window.redraft = redraft;

  return (
    <>
      <article className='news-article'>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        {isEmpty && (
          <div className='news-article_empty'>There's nothing to render...</div>
        )}
        {!isEmpty && (
          <>
            <h1 className={'news-article__heading'}>{heading}</h1>
            <span className={'news-article__date'}>{date}</span>
            <div className={'news-article__content'}>
              {redraft(raw, { inline, blocks, entities }, options)}
            </div>
            <p className={'news-article__source'}>
              Статья взята с сайта{' '}
              <a rel='noreferrer' className='news-article__link' href={link}>
                Коммерсант
              </a>
            </p>
            <TagsSection categories={categories} />
          </>
        )}
      </article>
      <Commentaries data={commentaries} />
    </>
  );
}
