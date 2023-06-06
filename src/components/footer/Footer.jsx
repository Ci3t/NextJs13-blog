import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div >&#169;2023 Ci3t All rights reserved </div>
        <div className={styles.social}>
          <Image className={styles.icon} src="/1.png" alt="facebook" width={15} height={15}/>
          <Image className={styles.icon} src="/2.png" alt="Instagram" width={15} height={15}/>
          <Image className={styles.icon} src="/3.png" alt="Twitter" width={15} height={15}/>
          <Image className={styles.icon} src="/4.png" alt="Youtube" width={15} height={15}/>
        </div>
    </div>
  )
}

export default Footer