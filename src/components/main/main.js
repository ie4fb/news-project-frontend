import React from 'react';
import mainStyles from './main.module.css'

export default function Main({children, ...props}) {


    return(
        <main className={mainStyles.content}>
            {children}
        </main>
    )
}