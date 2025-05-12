import styles from './MainTitle.module.css'

interface TitleProps {
    title: string
    className: string
}

const MainTitle: React.FC<TitleProps> = ({title, className}) => { 
    const styleProps = className ? className : ''
    return <span className={`${styles.title} ${styleProps}`}>{title}</span>

}

export default MainTitle