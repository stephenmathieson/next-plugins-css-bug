import React from 'react'
import Header from './Header'
import styles from './Layout.css'

export default ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
)
