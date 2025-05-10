import styles from './MainTitle.module.css'

interface TitleProps {
    title: string
    classNameModifiers: string
}

const MainTitle: React.FC<TitleProps> = ({title, classNameModifiers}) => { 
    const baseClassName = styles.title
    const modifiedClassName = classNameModifiers ? `${baseClassName} ${classNameModifiers || ''}` : baseClassName;
    return <span className={modifiedClassName}>{title}</span>
}

export default MainTitle