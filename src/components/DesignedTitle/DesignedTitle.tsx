import React from 'react'
import styles from './DesignedTitle.module.css'

interface titleProps {
  title: string
}

const DesignedTitle: React.FC<titleProps> = ({ title }) => {
  return <span className={styles.title}>{title}</span>
}

export default DesignedTitle
