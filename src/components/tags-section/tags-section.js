import React from 'react';
import tagsSectionStyles from './tags-section.module.css'
import TagItem from '../tag-item/tag-item';

export default function TagsSection(props) {

    const data = [{category: 'politics', label:"Политика"}]
    console.log(props)

    return(
             <div className={tagsSectionStyles.wrapper}>
                     <TagItem text={props.categories} />
             </div>
      )
}
