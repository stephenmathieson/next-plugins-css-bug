import React from 'react'
import Link from 'next/link'
import styles from './Header.css'

export default () => (
  <header className={styles.header}>
    <nav>
      <Link href='/'><a>home</a></Link>
      <Link href='/about'><a>about</a></Link>
    </nav>
  </header>
)
