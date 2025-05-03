import React from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './Button.module.css'; // Si estás usando CSS Modules

interface LinkButtonProps extends Omit<LinkProps, 'children'> {
  children: React.ReactNode;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, className}) => {
  const combinedClassName = className ? `${styles.button} ${className}` : styles.button;

  return (
    <Link href={href} className={combinedClassName}>
        {children}
    </Link>
  );
};

export default LinkButton;