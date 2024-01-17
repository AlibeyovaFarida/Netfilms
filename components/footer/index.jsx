import React from 'react'
import Link from 'next/link'
import styles from './style.module.css'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        Made with 🤍 by&nbsp;
        <Link href="https://twitter.com/_mehmetpekcan" target="_blank">Netfilms</Link>
    </footer>
  )
}

export default Footer