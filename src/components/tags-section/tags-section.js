import React from 'react';
import tagsSectionStyles from './tags-section.module.css'
import TagItem from '../tag-item/tag-item';

export default function TagsSection(props) {

    const data = [{category: 'politics', label:"Политика"}]

    return(
             <div className={tagsSectionStyles.wrapper}>
                 {props.categories.map((item, index) => (
                     <TagItem key={index} text={item} />
                 ))}
             </div>
      )
}
