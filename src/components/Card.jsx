import Button from './Button'
import styles from './Card.module.css'
import divider from './pattern-divider-desktop.svg'

const Card = ({content,onClick}) => {
    console.log(onClick)
    return(
        <article className={styles.card}>
            <h1>Advice #{content.id}</h1>
            <p>"{content.advice}"</p>
            <img className={styles.logo} alt='logo' src={divider}/>
            <Button  onClick={onClick} />
        </article>
    )
}

export default Card;