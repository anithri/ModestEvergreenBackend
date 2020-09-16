---
to: <%= pageDir %>/index.js
---
import React from 'react'
import styles from './styles.module.css'
import cx from 'classnames'

export const <%= name %> = ({className}) => {

  return (
    <main className={cx(className, styles.page)}>
      <h1><%= name %> Page</h1>
    </main>
  )
} 

export default <%= name %>